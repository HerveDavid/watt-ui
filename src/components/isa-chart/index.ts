import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Chart, ChartConfiguration, ChartData, ChartOptions } from 'chart.js/auto';
import styles from './style.css?inline';

/**
 * ISA 101 compliant chart component
 * Follows industrial control system standards for data visualization
 */
@customElement('isa-chart')
export class IsaChart extends LitElement {
  // ISA 101 Color Standards
  static readonly COLORS = {
    CHART_LINE: '#475CA7',     // Blue - Data Lines
    GRID_LINE: '#D8D8D8',      // Light Gray 216 - Grid Lines
    LABEL_TEXT: '#3F3F3F',     // Dark Gray 63 - Labels
    BACKGROUND: '#FFFFFF',      // White - Chart Background
    ALERT_HIGH: '#EC8629',     // Orange - High Priority
    ALERT_LOW: '#916AAD',      // Magenta - Low Priority
  };

  @property({ type: Array })
  data: number[] = [];

  @property({ type: String })
  title: string = '';

  @property({ type: Number })
  min?: number;

  @property({ type: Number })
  max?: number;

  @property({ type: Boolean })
  showGrid: boolean = true;

  @query('canvas')
  private canvas!: HTMLCanvasElement;
  
  private chart?: Chart;

  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="w-full h-full min-h-[200px] p-4 bg-white rounded shadow">
        ${this.title ? html`
          <div class="text-isa-gray-63 font-bold mb-4">${this.title}</div>
        ` : ''}
        <div class="relative h-[calc(100%-2rem)]">
          <canvas></canvas>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.initChart();
  }

  private initChart() {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;

    const labels = Array.from({ length: this.data.length }, (_, i) => i.toString());
    
    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels,
        datasets: [{
          data: this.data,
          borderColor: IsaChart.COLORS.CHART_LINE,
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0,
          pointHitRadius: 10,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false, // Disable animations for industrial applications
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: {
            display: false // Hide legend for simplicity
          },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: IsaChart.COLORS.LABEL_TEXT,
            bodyColor: IsaChart.COLORS.LABEL_TEXT,
            borderColor: IsaChart.COLORS.GRID_LINE,
            borderWidth: 1,
            padding: 10,
            displayColors: false,
          }
        },
        scales: {
          x: {
            grid: {
              display: this.showGrid,
              color: IsaChart.COLORS.GRID_LINE,
              drawBorder: false,
            },
            ticks: {
              color: IsaChart.COLORS.LABEL_TEXT,
              font: {
                family: 'Arial',
                size: 11
              }
            }
          },
          y: {
            min: this.min,
            max: this.max,
            grid: {
              display: this.showGrid,
              color: IsaChart.COLORS.GRID_LINE,
              drawBorder: false,
            },
            ticks: {
              color: IsaChart.COLORS.LABEL_TEXT,
              font: {
                family: 'Arial',
                size: 11
              }
            }
          }
        }
      } as ChartOptions
    };

    this.chart = new Chart(ctx, config);
  }

  // Update chart when data changes
  updated(changedProps: Map<string, any>) {
    if (changedProps.has('data') && this.chart) {
      this.chart.data.labels = Array.from({ length: this.data.length }, (_, i) => i.toString());
      this.chart.data.datasets[0].data = this.data;
      this.chart.update('none'); // Update without animation
    }
  }

  // Clean up chart instance
  disconnectedCallback() {
    if (this.chart) {
      this.chart.destroy();
    }
    super.disconnectedCallback();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'isa-chart': IsaChart;
  }
}