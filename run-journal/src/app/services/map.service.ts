import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../services/activity.service';
import { SAVED_ACTIVITIES } from '../shared/activities';

var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

@Injectable()
export class MapService {
    
    getActivity(id: number){
    	return SAVED_ACTIVITIES.slice(0).find(run => run.id == id)
    }


	constructor() { }

}