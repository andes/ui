import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

/**
 * @title Option groups autocomplete
 */
@Component({
  templateUrl: './layout-optgroup-example.html',
  styleUrls: ['./layout-optgroup-example.css'],
})

export class LayoutOptgroupExample {}