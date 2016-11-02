import React from 'react'
import { Bar, Doughnut, Radar } from 'react-chartjs-2'

import SmallBox from '../components/Widgets/SmallBox'

const data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Sales',
    type: 'line',
    data: [51, 65, 40, 49, 60, 37, 40],
    fill: false,
    borderColor: '#EC932F',
    backgroundColor: '#EC932F',
    pointBorderColor: '#EC932F',
    pointBackgroundColor: '#EC932F',
    pointHoverBackgroundColor: '#EC932F',
    pointHoverBorderColor: '#EC932F',
    yAxisID: 'y-axis-2'
  }, {
    type: 'bar',
    label: 'Visitor',
    data: [200, 185, 590, 621, 250, 400, 95],
    fill: false,
    backgroundColor: '#71B37C',
    borderColor: '#71B37C',
    hoverBackgroundColor: '#71B37C',
    hoverBorderColor: '#71B37C',
    yAxisID: 'y-axis-1'
  }]
}

const options1 = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  }
}

const data2 = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
}

const data3 = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
}

const data4 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}

const Index = () => (
  <div className='content body'>
    <div className='row'>
      <div className='col-lg-4 col-xs-6'>
        <SmallBox />
      </div>
      <div className='col-lg-4 col-xs-6'>
        <SmallBox />
      </div>
      <div className='col-lg-4 col-xs-6'>
        <SmallBox />
      </div>
    </div>
    <div className='row'>
      <div className='col-md-6'>
        <div className='box box-success'>
          <div className='box-header with-border'>
            <h3 className='box-title'>Demo Chart</h3>
            <div className='box-tools pull-right'>
              <button type='button' className='btn btn-box-tool' data-widget='collapse'>
                <i className='fa fa-minus' />
              </button>
              <button type='button' className='btn btn-box-tool' data-widget='remove'>
                <i className='fa fa-times' />
              </button>
            </div>
            <div className='box-body'>
              <div className='chart'>
                <Bar data={data1} options={options1} />
              </div>
            </div>
          </div>
        </div>
        <div className='box box-success'>
          <div className='box-header with-border'>
            <h3 className='box-title'>Demo Chart</h3>
            <div className='box-tools pull-right'>
              <button type='button' className='btn btn-box-tool' data-widget='collapse'>
                <i className='fa fa-minus' />
              </button>
              <button type='button' className='btn btn-box-tool' data-widget='remove'>
                <i className='fa fa-times' />
              </button>
            </div>
            <div className='box-body'>
              <div className='chart'>
                <Doughnut data={data2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='box box-success'>
          <div className='box-header with-border'>
            <h3 className='box-title'>Demo Chart</h3>
            <div className='box-tools pull-right'>
              <button type='button' className='btn btn-box-tool' data-widget='collapse'>
                <i className='fa fa-minus' />
              </button>
              <button type='button' className='btn btn-box-tool' data-widget='remove'>
                <i className='fa fa-times' />
              </button>
            </div>
            <div className='box-body'>
              <div className='chart'>
                <Radar data={data3} />
              </div>
            </div>
          </div>
        </div>
        <div className='box box-success'>
          <div className='box-header with-border'>
            <h3 className='box-title'>Demo Chart</h3>
            <div className='box-tools pull-right'>
              <button type='button' className='btn btn-box-tool' data-widget='collapse'>
                <i className='fa fa-minus' />
              </button>
              <button type='button' className='btn btn-box-tool' data-widget='remove'>
                <i className='fa fa-times' />
              </button>
            </div>
            <div className='box-body'>
              <div className='chart'>
                <Bar data={data4} />
              </div>
            </div>
          </div>
        </div>

        <div className='box box-success'>
          <div className='box-header with-border'>
            <h3 className='box-title'>Demo Chart</h3>
            <div className='box-tools pull-right'>
              <button type='button' className='btn btn-box-tool' data-widget='collapse'>
                <i className='fa fa-minus' />
              </button>
              <button type='button' className='btn btn-box-tool' data-widget='remove'>
                <i className='fa fa-times' />
              </button>
            </div>
            <div className='box-body'>
              <div className='chart'>
                <Bar data={data4} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    The index page
  </div>
)

export default Index
