export const groups = [
    { 
		"id": "dragons",  
		"name": "Little Dragons", 
		"details": "3 - 4 year olds",
        "venues": [
            "zksma_hq",
            "smsh",
            "bpcc",
            "flc"
        ]
	},
    {
        "id": "ninjas",  
		"name": "Mini Ninjas", 
		"details": "5 - 7 year olds",
        "venues": [
            "zksma_hq",
            "smsh",
            "bpcc",
            "wcc",
            "lms",
            "flc",
            "prps"
        ]
    },
    {
        "id": "juniors",  
		"name": "Junior MA", 
		"details": "8 - 11 year olds",
        "venues": [
            "zksma_hq",
            "smsh",
            "bpcc",
            "wcc",
            "lms",
            "flc",
            "prps"
        ]
    },
    {
        "id": "teens",  
		"name": "Teens MA", 
		"details": "12 - 17 year olds",
        "venues": [
            "zksma_hq",
            "wcc",
            "flc"
        ]
    },
    {
        "id": "sen",  
		"name": "S.E.N MA", 
		"details": "5 - 7 year olds",
        "venues": [
            "zksma_hq"
        ]
    },
    {
        "id": "home_ed",
        "name": "Home Schooled MA",
        "details": "5 - 7 year olds",
        "venues": [
            "zksma_hq"
        ]
    },
    {
        "id": "schools",  
		"name": "School Pupils Only", 
		"details": "5 - 11 year olds",
        "venues": [
            "lms"
        ]
    }
];

export const venues = [
    { "id" : "zksma_hq" },
    { "id" : "smsh" },
    { "id" : "lms" },
    { "id" : "bpcc" },
    { "id" : "flc" },
    { "id" : "prps" },
    { "id" : "wcc" }
]

export const SchedulesDataHQ = [
    {
        "id": "zksma_hq",
        "name": "Aylesbury HQ",
        "column_id_mon": [
            {
                "index" : "17",
                "timeslot_start": "17:00",
                "timeslot_end": "17:45",
                "group_id": "ninjas",
            },
            {   "index" : "18",
                "timeslot_start": "18:00",
                "timeslot_end": "18:45",
                "group_id": "juniors"
            },
            {   "index" : "19",
                "timeslot_start": "19:00",
                "timeslot_end": "19:45",
                "group_id": "teens"
            }            
        ],
        "column_id_tue": [
            {
                "index_16": {
                    "time_start": "16:15",
                    "time_end": "16:45",
                    "class_id": "dragons",
                },
                "index_17": {
                    "time_start": "17:00",
                    "time_end": "17:45",
                    "class_id": "ninjas"
                },
                "index_18": {
                    "time_start": "18:00",
                    "time_end": "18:45",
                    "class_id": "juniors"
                },
                "index_19": {
                    "time_start": "19:00",
                    "time_end": "19:45",
                    "class_id": "teens"
                }                
            }
            ]
    },
    {
        "id": "bpcc",
        "name": "Buckingham Park Community Center"
    },
    {
        "id": "flc",
        "name": "Fairford Leys Centre"
    },
    {
        "id": "nwjs",
        "name": "Nascot Wood Junior School"
    },
    {
        "id": "smsh",
        "name": "St Mary's School"
    },
    {
        "id": "cabin",
        "name": "The Cabin, Chiltern View Nursery"
    }
];

export const staff = [
    { value: 1, label: "Ben Babbington" },
    { value: 2, label: "Timothy Gourley"},
];

export const belts = [
    { value: 1, label: "White Belt" },
    { value: 2, label: "Yellow Belt" },
    { value: 3, label: "Orange Belt" },
    { value: 4, label: "Red Belt" },
    { value: 5, label: "Green Belt" },
    { value: 6, label: "Blue Belt" },
    { value: 7, label: "Purple Belt" },
    { value: 8, label: "Purple Tag Belt" },
    { value: 9, label: "Brown Belt" },
    { value: 10, label: "Brown Tag Belt" },
    { value: 11, label: "Black Belt" },
];

export const examTypes = [
    { value: 1, label: "Basics" },
    { value: 2, label: "Kata" },
    { value: 3, label: "Main Grading" },
    { value: 4, label: "Throws" },
];

export const gradeDragons = [
    { value: 1, label: "White Dragon" },
    { value: 2, label: "Yellow Dragon" },
    { value: 3, label: "Orange Dragon" },
    { value: 4, label: "Red Dragon" },
    { value: 5, label: "Green Dragon" },
    { value: 6, label: "Blue Dragon" },
];

export const mapVenues = [
    { 
        "id": 1,
        "venue_location": {
            "street": "",
            "town": "",
            "postcode": ""
        },
    },
];

export const scheduledEvent = document.getElementById('venue_schedule');

export const venue_schedule = scheduledEvent.getAttribute('data-venue_schedule');
export const time_start   = scheduledEvent.getAttribute('data-time_start');
export const time_end = scheduledEvent.getAttribute('data-time_end');
export const groupId = scheduledEvent.getAttribute('data-groupId');