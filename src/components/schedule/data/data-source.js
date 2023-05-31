export const daysData = [    
        { 
            day: "mon", 
            name: "Monday" 
        },
        { 
            day: "tue", 
            name : "Tuesday" 
        },
        { 
            day: "wed", 
            name : "Wednesday" 
        },
        { 
            day: "thu", 
            name : "Thursday" 
        },
        { 
            day: "fri", 
            name : "Friday" 
        },
        { 
            day: "sat", 
            name : "Saturday" 
        },
        { 
            day: "sun", 
            name : "Sunday" 
        }
    
]
export const groupData = [
    {
        groupID: "Little Dragons",
        groupName: "Little Little Dragons",
        details: "3 - 4 year olds",
        categoryColor: "#98FB98"
    },
    {
        groupID: "Mini Ninjas",
        groupName: "Mini Mini Ninjas",
        details: "5 - 7 year olds",
        categoryColor: "#CC5757"
    },
    {
        groupID: "Juniors MA",
        groupName: "Juniors MA MA",
        details: "8 - 11 year olds",
        categoryColor: "#A33030"
    },
    {
        groupID: "Teens MA",
        groupName: "Teens MA MA",
        details: "12 - 17 year olds",
        categoryColor: "#A35E30"
    },
    {
        groupID: "sen",
        groupName: "S.E.N MA",
        details: "Autism friendly, 5 - 11 year olds",
        categoryColor: "#fcf26a"
    },
    {
        groupID: "homeed",
        groupName: "Home Ed MA",
        details: "For home schooled children",
        categoryColor: "#9ecbf5"
    },
    {
        groupID: "schools",
        groupName: "Schools MA",
        details: "For school pupils only",
        categoryColor: "#e090f8"
    }
]


export const venueData = [
    {
        venueID: ""
    },
    {
        venueID: "zksma_hq",
        name: 'Aylesbury HQ',
        shortcode: 'zksma_hq'
    },
    {
        venueID: "bpcc",
        name: 'Buckingham Park Community Center',
        shortcode: 'bpcc'
    },
    {
        venueID: "flc",
        name: 'Fairford Leys Center',
        shortcode: 'flc'
    },
    {
        venueID: "lms",
        name: 'Long Marston School',
        shortcode: 'lms'
    },
    {
        venueID: "smsh",
        name: 'St. Mary\'s School, Haddenham',
        shortcode: 'smsh'
    },
    {
        venueID: "prps",
        name: 'Princes Risborough Primary School',
        shortcode: 'prps'
    },
    {
        venueID: "wcc",
        name: 'Wingrave Community Center',
        shortcode: 'wcc'
    }
]

export const columnData = [
    {
        column_id: null,
        index: 0,
        rowIndex: "firstCell"
    },
    {
        column_id: "mon",
        index: 1,
        name: "Monday" 
    },
    {
        column_id: "tue",
        index: 2,
        name : "Tuesday"
    },
    {
        column_id: "wed",
        index: 3,
        name : "Wednesday"
    },
    {
        column_id: "thu",
        index: 4,
        name : "Thursday"
    },
    {
        column_id: "fri",
        index: 5,
        name : "Friday"
    },
    {
        column_id: "sat",
        index: 6,
        name : "Saturday" 
    },
    {
        column_id: "sun",
        index: 7,
        name: "Sunday"
    }
]

export const rowData = [
    { 
        "rowIndex": "8",
        "firstCell": "08:00 AM"
    },
    { 
        "rowIndex": "9",
        "firstCell": "09:00 AM" },
    { 
        "rowIndex": "10",
        "firstCell": "10:00 AM" },
    { 
        "rowIndex": "11",
        "firstCell": "11:00 AM" },
    { 
        "rowIndex": "12",
        "firstCell": "12:00 PM" },
    { 
        "rowIndex": "13",
        "firstCell": "01:00 PM" },
    { 
        "rowIndex": "14",
        "firstCell": "02:00 PM" },
    { 
        "rowIndex": "15",
        "firstCell": "03:00 PM" },
    { 
        "rowIndex": "16",
        "firstCell": "04:00 PM" },
    { 
        "rowIndex": "17",
        "firstCell": "05:00 PM" },
    { 
        "rowIndex": "18",
        "firstCell": "06:00 PM" },
    { 
        "rowIndex": "19",
        "firstCell": "07:00 PM" },
    { 
        "rowIndex": "20",
        "firstCell": "08:00 PM" },
    { 
        "rowIndex": "21",
        "firstCell": "09:00 PM" },
    { 
        "rowIndex": "22",
        "firstCell": "10:00 PM" },
    

]
export const eventsData = [
    {
        id: 1,
        column_id: "mon",        
        venueID: "smsh",
        startTime: "16:15:00",
        endTime: "16:45:00",
        groupName: "Little Dragons"
    },
           
    {
        id: 2,
        column_id: "tue",                     
        venueID: "zksma_hq",
        startTime: "16:15:00",
        endTime: "16:45:00",
        groupName: "Little Dragons"
    },
       
    {
        id: 3,
        column_id: "tue",        
        venueID: "bpcc", 
        startTime: "16:15:00",
        endTime: "16:45:00",
        groupName: "Little Dragons"
    },
                 
    {
        id: 4,
        column_id: "thu",        
        venueID: "bpcc", 
        startTime: "16:15:00",
        endTime: "16:45:00",
        groupName: "Little Dragons"
    },
                          
    {
        id: 5,
        column_id: "thu",
        venueID: "flc",
        startTime: "16:15:00",
        endTime: "16:45:00",
        groupName: "Little Dragons"
    },
                        
    {
        id: 6,
        column_id: "fri", 
        venueID: "zksma_hq",
        startTime: "16:15:00",
        endTime: "16:45:00",
        groupName: "Little Dragons"
    },
                        
    {
        id: 7,
        column_id: "sat",
        venueID: "zksma_hq",
        startTime: "09:00:00",
        endTime: "10:00:00",
        groupName: "Little Dragons"
    },
                        
    {
        id: 8,
        column_id: "sat",
        venueID: "flc",
        startTime: "10:00:00",
        endTime: "11:00:00",
        groupName: "Little Dragons"
    },

    {
        id: 9,
        column_id: "mon", 
        venueID: "zksma_hq",
        startTime: "17:00:00",
        endTime: "17:45:00",
        groupName: "Mini Ninjas"
    },
    
    {
        id: 10,
        column_id: "mon", 
        venueID: "smsh",
        startTime: "17:00:00",
        endTime: "17:45:00",
        groupName: "Mini Ninjas"
    },
        
    {
        id: 11,
        column_id: "tue", 
        venueID: "zksma_hq",
        startTime: "17:00:00",
        endTime: "17:45:00",
        groupName: "Mini Ninjas"
    },
                
    {
        id: 12,
        column_id: "tue", 
        venueID: "bpcc",
        startTime: "17:00:00",
        endTime: "17:45:00",
        groupName: "Mini Ninjas"
    },                    
    
    {
        id: 13,
        column_id: "wed", 
        venueID: "zksma_hq",
        startTime: "17:00:00",
        endTime: "17:45:00",
        groupName: "Mini Ninjas"
    },
                
    {   
        id: 14,
        column_id: "wed", 
        venueID: "wcc",
        startTime: "18:00:00",
        endTime: "18:45:00",
        groupName: "Mini Ninjas"
    },
        
    {
        id: 15,
        column_id: "thu", 
        venueID: "bpcc",
        startTime: "17:00:00",
        endTime: "17:45:00",
        groupName: "Mini Ninjas"
    },
    
    {
        id: 16,
        column_id: "thu", 
        venueID: "flc",
        startTime: "17:00:00",
        endTime: "17:45:00",
        groupName: "Mini Ninjas"
    },
                            
    {
        id: 17,
        column_id: "thu", 
        venueID: "prps",
        startTime: "18:30:00",
        endTime: "19:15:00",
        groupName: "Mini Ninjas"
    },                    
                
    {
        id: 18,
        column_id: "fri", 
        venueID: "zksma_hq",
        startTime: "17:00:00",
        endTime: "17:45:00",
        groupName: "Mini Ninjas"
    },
                        
    {
        id: 19,
        column_id: "fri", 
        venueID: "flc",
        startTime: "16:15:00",
        endTime: "17:00:00",
        groupName: "Mini Ninjas"
    },                    
    
    {
        id: 20,
        column_id: "sat", 
        venueID: "zksma_hq",
        startTime: "10:00:00",
        endTime: "10:45:00",
        groupName: "Mini Ninjas"
    },
    
    {
        id: 21,
        column_id: "sat", 
        venueID: "flc",
        startTime: "11:00:00",
        endTime: "11:45:00",
        groupName: "Mini Ninjas"
    },                     
  
    
    {
        id: 22,
        column_id: "mon",
        venueID: "zksma_hq",
        startTime: "18:00:00",
        endTime: "18:45:00",
        groupName: "Juniors MA"
    },

    {
        id: 23,
        column_id: "mon",
        venueID: "smsh",
        details: "8 - 9 year olds",
        startTime: "18:00:00",
        endTime: "18:45:00",
        groupName: "Juniors MA"
    },

    {
        id: 24,
        column_id: "mon",
        venueID: "smsh",
        details: "10 - 11 year olds",
        startTime: "19:00:00",
        endTime: "19:45:00",
        groupName: "Juniors MA"
    },           
                        
    {
        id: 25,
        column_id: "tue", 
        venueID: "zksma_hq",
        startTime: "18:00:00",
        endTime: "18:45:00",
        groupName: "Juniors MA"
    },

    {
        id: 26,
        column_id: "tue", 
        venueID: "bpcc",
        startTime: "18:00:00",
        endTime: "18:45:00",
        groupName: "Juniors MA"
    },
                        
    {
        id: 27,
        column_id: "wed", 
        venueID: "zksma_hq",
        startTime: "18:00:00",
        endTime: "18:45:00",
        groupName: "Juniors MA"
    },
    
    {   
        id: 28,
        column_id: "wed", 
        venueID: "wcc",
        startTime: "18:00:00",
        endTime: "18:45:00",
        groupName: "Juniors MA"
    },
                        
    {
        id: 29,
        column_id: "thu", 
        venueID: "bpcc",
        startTime: "18:00:00",
        endTime: "18:45:00",
        groupName: "Juniors MA"
    },
                
    {
        id: 30,
        column_id: "thu", 
        venueID: "flc",
        startTime: "18:00:00",
        endTime: "18:45:00",
        groupName: "Juniors MA"
    },
                        
    {
        id: 31,
        column_id: "thu", 
        venueID: "prps",
        startTime: "18:30:00",
        endTime: "19:15:00",
        groupName: "Juniors MA"
    },                    
    
    {
        id: 32,
        column_id: "fri",
        venueID: "zksma_hq",
        startTime: "18:00:00",
        endTime: "18:45:00",
        groupName: "Juniors MA"
    },
    
    {
        id: 33,
        column_id: "fri",
        venueID: "flc",
        startTime: "17:15:00",
        endTime: "18:00:00",
        groupName: "Juniors MA"
    },
                        
    {
        id: 34,
        column_id: "sat", 
        venueID: "zksma_hq",
        details: "8 - 10 year olds",
        startTime: "11:00:00",
        endTime: "11:45:00",
        groupName: "Juniors MA"
    }, 

    {
        id: 35,
        column_id: "sat",
        venueID: "zksma_hq",
        details: "10 - 12 year olds",
        startTime: "12:00:00",
        endTime: "12:45:00",
        groupName: "Juniors MA"
    },                   
        
    {
        id: 36,
        column_id: "sat", 
        venueID: "flc",
        startTime: "12:00:00",
        endTime: "12:45:00",
        groupName: "Juniors MA"
    }, 
    
    {
        id: 37,
        column_id: "mon", 
        venueID: "zksma_hq",
        startTime: "19:00:00",
        endTime: "19:45:00",
        groupName: "Teens MA"
    },
    
    {
        id: 38,
        column_id: "tue", 
        venueID: "zksma_hq",
        startTime: "19:00:00",
        endTime: "19:45:00",
        groupName: "Teens MA"
    },
                
    {
        id: 39,
        column_id: "wed", 
        venueID: "zksma_hq",
        startTime: "19:00:00",
        endTime: "19:45:00",
        groupName: "Teens MA"
    },
        
    {
        id: 40,
        column_id: "wed", 
        venueID: "wcc",
        startTime: "19:00:00",
        endTime: "19:45:00",
        groupName: "Teens MA"
    },
    
    {
        id: 41,
        column_id: "thu", 
        venueID: "zksma_hq",
        startTime: "19:00:00",
        endTime: "19:45:00",
        groupName: "Teens MA"
    },

    {
        id: 42,
        column_id: "thu", 
        venueID: "flc",
        startTime: "19:00:00",
        endTime: "19:45:00",
        groupName: "Teens MA"
    },
                        
    {
        id: 43,
        column_id: "sat", 
        venueID: "zksma_hq",
        startTime: "13:00:00",
        endTime: "13:45:00",
        groupName: "Teens MA"
    },
        
    {
        id: 44,
        column_id: "sat", 
        venueID: "zksma_hq",
        details: "Elite Class, by invite only",
        startTime: "14:00:00",
        endTime: "14:45:00",
        groupName: "Teens MA"
    },

    {
        id: 45,
        column_id: "sat", 
        venueID: "zksma_hq",
        details: "Autism Friendly, for 5 - 11 year olds",
        startTime: "12:10:00",
        endTime: "12:25:00",
        groupName: "S.E.N MA"
    },
 
    {   
        id: 46,
        column_id: "fri",
        venueID: "zksma_hq",
        details: "Home Schooled, for 5 - 11 year olds",
        startTime: "11:00:00",
        endTime: "11:45:00",
        groupName: "Home Ed MA"
    },
 
    {
        id: 47,
        column_id: "thu",
        venueID: "lms",
        details: "School Pupils only, 5 - 11 year olds",
        startTime: "08:00:00",
        endTime: "08:45:00",
        groupName: "Schools MA"
    }
]
