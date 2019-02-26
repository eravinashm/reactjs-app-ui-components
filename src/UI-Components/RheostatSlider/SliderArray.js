export const sliderArray = [
    {
        "id":"duration",
        "label":"Duration"
    },
    {
        "id":"timeOnHold",
        "label":"Time On Hold"
    },
    {
        "id":"timeSilence",
        "label":"Time Silence"
    },
    {
        "id":"ansDelay",
        "label":"Answer Delay"
    }
];

export const getIdByLabel = (label) => {
    let sliderId = '';
    sliderArray.forEach(item => {
        if(item.label === label)
            sliderId = item.id;
    })
    return sliderId;
}

export const getLabelById = (id) => {
    let sliderLabel = '';
    sliderArray.forEach(item => {
        if(item.id === id)
            sliderLabel = item.label;
    })
    return sliderLabel;
}
