export const Circles = [
    // Circle 1 - 4m 30s time before Circle starts to close. Then 4m 30s for the circle to shrink
    {
        circleId: 1,
        durationStatic: 270,
        durationShrink: 270,
    },
    // Circle 2 - 1m 30s time before Circle starts to close. Then 2m 30s for the circle to shrink
    {
        circleId: 2,
        durationStatic: 90,
        durationShrink: 150,
    },
    // Circle 3 - 1m 15s time before Circle starts to close. Then 2m 00s for the circle to shrink
    {
        circleId: 3,
        durationStatic: 75,
        durationShrink: 120,
    },
    // Circle 4 - 1m 00s time before Circle starts to close. Then 1m 30s for the circle to shrink
    {
        circleId: 4,
        durationStatic: 60,
        durationShrink: 90,
    },
    // Circle 5 - 1m 00s time before Circle starts to close. Then 1m 00s for the circle to shrink
    {
        circleId: 5,
        durationStatic: 60,
        durationShrink: 60,
    },
    // Circle 6 - 0m 45s time before Circle starts to close. Then 0m 50s for the circle to shrink
    {
        circleId: 6,
        durationStatic: 45,
        durationShrink: 50,
    },
    // Circle 7 - 0m 30s time before Circle starts to close. Then 0m 50s for the circle to shrink
    {
        circleId: 7,
        durationStatic: 30,
        durationShrink: 50,
    },
    // Circle 8 - 0m 10s time before Circle starts to close. Then 0m 30s for the circle to move
    {
        circleId: 8,
        durationStatic: 10,
        durationShrink: 30,
    },
    // Circle 10 - 0m 10s time before Circle starts to close. Then 0m 30s for the circle to move
    {
        circleId: 10,
        durationStatic: 5,
        durationShrink: 30,
    },
    // Circle 11 - 0m 45s time as circle shrinks completely
    {
        circleId: 11,
        durationStatic: 0,
        durationShrink: 45,
    },
]
export interface CircleByTimeResult { circleId: number, shrinking: boolean }
export const CircleByTime = (timePlayedSeconds:number):CircleByTimeResult => {
    let accum = 0
    for(const circle of Circles) {
        accum += circle.durationStatic
        if (accum >= timePlayedSeconds) {
            return { circleId: circle.circleId, shrinking: false }
        }
        accum += circle.durationShrink
        if (accum >= timePlayedSeconds) {
            return { circleId: circle.circleId, shrinking: true }
        }
    }
    return { circleId: 11, shrinking: true }
}
export const CircleStartTime = (cId:number):number => {
    let accum = 0
    for(const { circleId, durationStatic, durationShrink } of Circles) {
        if (circleId === cId) {
            return accum
        }
        accum += durationStatic
        accum += durationShrink
    }
    return accum
}
