import { IPlanner } from "../../interfaces/planner.interface";
import { daysOfWeekEnum } from "../enums/days-of-week.enum";

export const daysOfWeekMap: { [key in daysOfWeekEnum]: IPlanner } = {
    [daysOfWeekEnum.SEGUNDA]: {
        day: 'SEGUNDA',
        activities: {
            morning: 'DESCHAMPS',
            afternoon: 'FRONT/ANG',
            evening: ''
        }
    },
    [daysOfWeekEnum.TERCA]: {
        day: 'TERÇA',
        activities: {
            morning: 'ANGULAR',
            afternoon: 'FRONT/ANG',
            evening: 'DESCHAMPS'
        }
    },
    [daysOfWeekEnum.QUARTA]: {
        day: 'QUARTA',
        activities: {
            morning: 'BACK',
            afternoon: 'ANGULAR',
            evening: 'BACK'
        }
    },
    [daysOfWeekEnum.QUINTA]: {
        day: 'QUINTA',
        activities: {
            morning: 'LFA',
            afternoon: 'ANGULAR',
            evening: ''
        }
    },
    [daysOfWeekEnum.SEXTA]: {
        day: 'SEXTA',
        activities: {
            morning: 'ANGULAR',
            afternoon: '',
            evening: ''
        }
    }
};