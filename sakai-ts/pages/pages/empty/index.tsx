import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { ChartData, ChartOptions } from 'chart.js';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';
import React, { useContext, useEffect, useState } from 'react';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { ChartDataState, ChartOptionsState } from '../../../types/types';

const EmptyPage = () => {
    const [options, setOptions] = useState<Partial<ChartOptionsState>>({});
    const [data, setChartData] = useState<Partial<ChartDataState>>({});
    const { layoutConfig } = useContext(LayoutContext);


    useEffect(() => {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  

      const lineData: ChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                borderColor: documentStyle.getPropertyValue('--primary-500'),
                tension: 0.4
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: documentStyle.getPropertyValue('--primary-200'),
                borderColor: documentStyle.getPropertyValue('--primary-200'),
                tension: 0.4
            }
        ]
        };

        const lineOptions: ChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    },
                    border: {
                        display: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    },
                    border: {
                        display: false
                    }
                }
            }
        };
            setOptions({
                lineOptions,
            });
            setChartData({
                lineData,
            });
        }, [layoutConfig]);

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>NFTInsight Dashboard</h5>
                    <p>Use this page to start from scratch and place your custom content.</p>
                </div>
                            
                <div className="card surface-0">
                    <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
                        <li>
                            <a className="text-500 no-underline line-height-3 cursor-pointer">NFT Collection</a>
                        </li>
                        <li className="px-2">
                            <i className="pi pi-angle-right text-500 line-height-3"></i>
                        </li>
                        <li>
                            <span className="text-900 line-height-3">Analytics</span>
                        </li>
                    </ul>
                    
                    <div className="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
                        <div>
                            <div className="font-medium text-3xl text-900">NFT Collection</div>
                            <div className="flex align-items-center text-700 flex-wrap">
                                <div className="mr-5 flex align-items-center mt-3">
                                    <i className="pi pi-users mr-2"></i>
                                    <span>332 Active Users</span>
                                </div>
                                <div className="mr-5 flex align-items-center mt-3">
                                    <i className="pi pi-globe mr-2"></i>
                                    <span>9402 Sessions</span>
                                </div>
                                <div className="flex align-items-center mt-3">
                                    <i className="pi pi-clock mr-2"></i>
                                    <span>2.32m Avg. Duration</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 lg:mt-0">
                            <Button label="Add" className="p-button-outlined mr-2" icon="pi pi-user-plus" />
                            <Button label="Save" icon="pi pi-check" />
                        </div>
                    </div>
                </div>
                    
                <div className="col-12 xl:col-6">
                <div className="card">
                    <h5>Linear Chart</h5>
                    <Chart type="line" data={data?.lineData} options={options?.lineOptions}></Chart>
                </div>
            </div>
                <div className="card">
                    <h4>ScrollTop</h4>
                    <ScrollPanel style={{ width: '250px', height: '200px' }}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet
                            consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus
                            orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut
                            etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                            Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                        </p>
                        <ScrollTop target="parent" className="custom-scrolltop" threshold={100} icon="pi pi-arrow-up"></ScrollTop>
                    </ScrollPanel>
                </div>
            </div>
        </div>
    );
};

export default EmptyPage;
