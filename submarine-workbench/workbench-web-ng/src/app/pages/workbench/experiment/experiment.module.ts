import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperimentInfoComponent } from './experiment-info/experiment-info.component';
import { MetricsComponent } from './experiment-info/metrics/metrics.component';
import { HyperParamsComponent } from './experiment-info/hyper-params/hyper-params.component';
import { ChartsComponent } from './experiment-info/charts/charts.component';
import { OutputsComponent } from './experiment-info/outputs/outputs.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

@NgModule({
  exports: [ReactiveFormsModule],
  imports: [NgZorroAntdModule, CommonModule, FormsModule, NgxChartsModule],
  declarations: [ExperimentInfoComponent, HyperParamsComponent, MetricsComponent, ChartsComponent, OutputsComponent]
})
export class ExperimentModule {}
