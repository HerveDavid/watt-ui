import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Chart } from 'chart.js/auto';
import styles from './circuit-panel.css?inline';

// ISA 101 color themes
const themes = {
  light: {
    background: '#E0E0E0',      // Light Gray 224
    panelBg: '#FFFFFF',         // White
    groupBg: '#E8E8E8',        // Light Gray 232
    borderColor: '#D8D8D8',    // Light Gray 216
    textColor: '#3F3F3F',      // Dark Gray 63
    equipmentOff: '#808080',   // Gray 128
    equipmentOn: '#F0F0F0',    // Off White
    chartLine: '#475CA7',      // Blue - Data Lines
    buttonBg: '#C6C6C6',       // Light Gray 198
    buttonBorder: '#AAAAAA',   // Gray 170
  },
  dark: {
    background: '#1A1A1A',      // Very Dark Gray
    panelBg: '#242424',         // Dark Gray
    groupBg: '#2A2A2A',         // Dark Gray
    borderColor: '#404040',     // Medium Gray
    textColor: '#E0E0E0',       // Light Gray
    equipmentOff: '#404040',    // Medium Gray
    equipmentOn: '#D8D8D8',     // Light Gray
    chartLine: '#93C2E4',       // Light Blue
    buttonBg: '#3A3A3A',        // Medium Dark Gray
    buttonBorder: '#505050',    // Medium Gray
  }
};

interface CircuitData {
  id: number;
  status: 'TRIPPED' | 'NORMAL';
  cellLiqLev: {
    n: boolean;
    s: boolean;
  };
  readings: {
    headPress: number[];
    cellLiq: number[];
    ci2Press: number[];
    h2Press: number[];
  };
  alarms?: {
    value: number;
    active: boolean;
  };
}

@customElement('circuit-panel')
export class CircuitPanel extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true }) 
  isDarkMode = false;

  @state() private circuits: CircuitData[] = [];
  private charts: Map<string, Chart> = new Map();

  get colors() {
    return this.isDarkMode ? themes.dark : themes.light;
  }

  constructor() {
    super();
    this.circuits = [11, 12, 13, 14].map(id => ({
      id,
      status: 'TRIPPED',
      cellLiqLev: { n: true, s: false },
      readings: {
        headPress: this.generateWaveData(5, 0.05),
        cellLiq: this.generateWaveData(8, 0.08),
        ci2Press: this.generateWaveData(12, 0.15),
        h2Press: this.generateWaveData(15, 0.2)
      },
      alarms: id === 12 ? { value: -0.8, active: true } : undefined
    }));
  }

  private generateWaveData(amplitude = 10, frequency = 0.1, points = 50): number[] {
    return Array.from({ length: points }, (_, i) => 
      amplitude * Math.sin(frequency * i) + (Math.random() * 2 - 1)
    );
  }

  private createChart(canvas: HTMLCanvasElement, data: number[]) {
    return new Chart(canvas, {
      type: 'line',
      data: {
        labels: Array(data.length).fill(''),
        datasets: [{
          data,
          borderColor: this.colors.chartLine,
          borderWidth: 1,
          pointRadius: 0,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { 
            display: false,
            grid: {
              color: this.colors.borderColor
            }
          },
          y: { 
            display: false,
            grid: {
              color: this.colors.borderColor
            }
          }
        },
        animation: false
      }
    });
  }

  firstUpdated() {
    this.initializeCharts();
  }

  private initializeCharts() {
    this.shadowRoot?.querySelectorAll('canvas').forEach(canvas => {
      const [circuitId, readingType] = canvas.dataset.chartId?.split('-') || [];
      if (!circuitId || !readingType) return;

      const circuit = this.circuits.find(c => c.id.toString() === circuitId);
      if (!circuit) return;

      const data = circuit.readings[readingType as keyof typeof circuit.readings];
      this.charts.set(canvas.dataset.chartId!, this.createChart(canvas, data));
    });
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('isDarkMode')) {
      // Update chart colors when theme changes
      this.charts.forEach(chart => {
        chart.destroy();
      });
      this.charts.clear();
      this.initializeCharts();
    }
  }

  private renderMeasurementGroup(circuit: CircuitData, title: string, readingType: keyof CircuitData['readings'], controls: string[] = ['P', 'I']) {
    return html`
      <div class="measurement-group" style="margin-bottom: 1rem;">
        <div class="flex justify-between items-center mb-1">
          <span style="color: ${this.colors.textColor}" class="text-sm">${title}</span>
          <div class="flex gap-1">
            ${controls.map(control => html`
              <div 
                class="w-6 h-6 flex items-center justify-center text-xs"
                style="
                  border: 1px solid ${this.colors.buttonBorder};
                  background: ${this.colors.groupBg};
                  color: ${this.colors.textColor};
                "
              >
                ${control}
              </div>
            `)}
          </div>
        </div>
        <div class="h-12" style="background: ${this.colors.groupBg}">
          <canvas data-chart-id="${circuit.id}-${readingType}"></canvas>
        </div>
      </div>
    `;
  }

  private renderCircuit(circuit: CircuitData) {
    return html`
      <div class="circuit-column" 
        style="border-right: 1px solid ${this.colors.borderColor}">
        <div class="p-2" style="border-bottom: 1px solid ${this.colors.borderColor}">
          <div class="text-center font-bold mb-2"
            style="color: ${this.colors.textColor}">
            ${circuit.id}
          </div>
          
          <div class="mb-2 p-1 text-center"
            style="
              background: ${this.colors.equipmentOff};
              color: ${this.colors.equipmentOn};
            ">
            ${circuit.status}
          </div>

          <div class="grid grid-cols-2 gap-1 text-sm">
            ${['N', 'S'].map(label => html`
              <div class="p-1 text-center"
                style="
                  background: ${this.colors.groupBg};
                  color: ${this.colors.textColor};
                ">
                ${label}: ${circuit.cellLiqLev[label.toLowerCase() as 'n' | 's'] ? '■' : '□'}
              </div>
            `)}
          </div>

          ${['LEVEL', 'VOLT'].map(value => html`
            <div class="text-center mt-1 p-1"
              style="
                background: ${this.colors.groupBg};
                color: ${this.colors.textColor};
              ">
              ${value}
            </div>
          `)}
        </div>

        <div class="p-2">
          ${this.renderMeasurementGroup(circuit, 'Head Press', 'headPress')}
          ${this.renderMeasurementGroup(circuit, 'Cell Liq', 'cellLiq')}
          ${this.renderMeasurementGroup(circuit, 'CI2 Press', 'ci2Press', ['P'])}
          ${this.renderMeasurementGroup(circuit, 'H2 Press', 'h2Press', ['P'])}

          ${circuit.alarms ? html`
            <div class="absolute top-20 right-4 flex items-center justify-center w-12 h-12 rounded-full"
              style="
                background: ${circuit.alarms.active ? '#E22028' : this.colors.groupBg};
                color: ${this.colors.equipmentOn};
              ">
              <span class="text-sm">${circuit.alarms.value}</span>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="min-h-screen p-4" style="background: ${this.colors.background}">
        <!-- Theme Toggle -->
        <button
          @click=${() => this.isDarkMode = !this.isDarkMode}
          class="fixed top-4 right-4 p-2 rounded-full transition-colors duration-200"
          style="
            background: ${this.colors.groupBg};
            color: ${this.colors.textColor};
          "
        >
          ${this.isDarkMode ? 
            html`<span class="text-xl">☀️</span>` : 
            html`<span class="text-xl">🌙</span>`
          }
        </button>

        <div style="
          background: ${this.colors.panelBg};
          border: 1px solid ${this.colors.borderColor};
        " class="rounded shadow">
          <!-- Status Bar -->
          <div class="flex p-2" style="
            border-bottom: 1px solid ${this.colors.borderColor};
            background: ${this.colors.groupBg};
          ">
            <div class="w-20 h-8 mr-2 bg-[#3CB371]"></div>
            <div class="w-20 h-8 mr-2 bg-[#E22028]"></div>
            <div class="flex-1">
              <select class="w-full h-8" style="
                border: 1px solid ${this.colors.buttonBorder};
                background: ${this.colors.groupBg};
                color: ${this.colors.textColor};
              ">
                <option>Select Circuit</option>
              </select>
            </div>
            <div class="ml-2 flex items-center" style="color: ${this.colors.textColor}">
              <span class="text-sm">Nov 15 2013</span>
              <span class="ml-4 text-sm">10:37 AM</span>
            </div>
          </div>

          <!-- Circuit Columns -->
          <div class="flex">
            ${this.circuits.map(circuit => this.renderCircuit(circuit))}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'circuit-panel': CircuitPanel;
  }
}