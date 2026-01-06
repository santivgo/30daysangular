export interface IPlanner {
    day: string
    activities: IActivity
}

export interface IActivity {
    morning: string
    afternoon: string
    evening: string
}