import React from 'react';
import CanvasJSReact from './canvasjs-3.2.9/canvasjs.react.js';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends React.Component {

    render() {
        const lightOptions = {
            animationEnabled: true,
            theme: "light2",
            axisY: {
                title: "Proficiency Level",
            },
            axisX: {
                title: "Skill",
                labelAngle: 0
            },
            data: [{
                type: "column",
                dataPoints: [
                    { label: "HTML", y: 90 },
                    { label: "CSS", y: 75 },
                    { label: "JavaScript", y: 80 },
                    { label: "Backend", y: 75 },
                    { label: "React", y: 60 },
                    { label: "Knitting", y: 0 }
                ]
            }]
        }

        const darkOptions = {
            animationEnabled: true,
            theme: "dark2",
            axisY: {
                title: "Proficiency Level",
            },
            axisX: {
                title: "Skill",
                labelAngle: 0
            },
            data: [{
                type: "column",
                dataPoints: [
                    { label: "HTML", y: 90 },
                    { label: "CSS", y: 75 },
                    { label: "JavaScript", y: 80 },
                    { label: "Backend", y: 75 },
                    { label: "React", y: 60 },
                    { label: "Knitting", y: 0 }
                ]
            }]
        }

        return (
            <div>
                <CanvasJSChart options={this.props.theme ? lightOptions : darkOptions}
                    onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default Chart;