export interface IActivity{
	// what is an activity we wanna log
	id: number
	name: string
	date: Date
	comments?: string //optional with a ?
	distance?: number
	gpxData: string //string points to location of xml format turns to geo json
	
}