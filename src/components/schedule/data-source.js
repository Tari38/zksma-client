export const daysData = [    
        { 
            "day": "mon", 
            "name": "Monday" 
        },
        { 
            "day": "tue", 
            "name" : "Tuesday" 
        },
        { 
            "day": "wed", 
            "name" : "Wednesday" 
        },
        { 
            "day": "thu", 
            "name" : "Thursday" 
        },
        { 
            "day": "fri", 
            "name" : "Friday" 
        },
        { 
            "day": "sat", 
            "name" : "Saturday" 
        },
        { 
            "day": "sun", 
            "name" : "Sunday" 
        }
    
]
export const groupData = [
    {
        "groupID": "dragons",
        "groupName": "Little Dragons",
        "details": "3 - 4 year olds",
        "categoryColor": "#98FB98"
    },
    {
        "groupID": "ninjas",
        "groupName": "Mini Ninjas",
        "details": "5 - 7 year olds",
        "categoryColor": "#CC5757"
    },
    {
        "groupID": "juniors",
        "groupName": "Juniors MA",
        "details": "8 - 11 year olds",
        "categoryColor": "#A33030"
    },
    {
        "groupID": "teens",
        "groupName": "Teens MA",
        "details": "12 - 17 year olds",
        "categoryColor": "#A35E30"
    },
    {
        "groupID": "sen",
        "groupName": "S.E.N MA",
        "details": "Autism friendly, 5 - 11 year olds",
        "categoryColor": "#fcf26a"
    },
    {
        "groupID": "homeed",
        "groupName": "Home Ed MA",
        "details": "For home schooled children",
        "categoryColor": "#9ecbf5"
    },
    {
        "groupID": "schools",
        "groupName": "Schools MA",
        "details": "For school pupils only",
        "categoryColor": "#e090f8"
    }
]


export const venueData = [
    {
        'venueID': ""
    },
    {
        'venueID': "zksma_hq",
        'name': 'Aylesbury HQ',
        'shortcode': 'zksma_hq'
    },
    {
        'venueID': "bpcc",
        'name': 'Buckingham Park Community Center',
        'shortcode': 'bpcc'
    },
    {
        'venueID': "flc",
        'name': 'Fairford Leys Center',
        'shortcode': 'flc'
    },
    {
        'venueID': "lms",
        'name': 'Long Marston School',
        'shortcode': 'lms'
    },
    {
        'venueID': "smsh",
        'name': 'St. Mary\'s School, Haddenham',
        'shortcode': 'smsh'
    },
    {
        'venueID': "prps",
        'name': 'Princes Risborough Primary School',
        'shortcode': 'prps'
    },
    {
        'venueID': "wcc",
        'name': 'Wingrave Community Center',
        'shortcode': 'wcc'
    }
]

export const employeeData = [{
        'EmployeeID': 1,
        'LastName': 'Davolio',
        'FirstName': 'Nancy',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-664743600000),
        'HireDate': new Date(704692800000),
        'Address': '507 - 20th Ave. E.\r\nApt. 2A',
        'City': 'Seattle',
        'Region': 'WA',
        'PostalCode': '98122',
        'Country': 'USA',
        'HomePhone': '(206) 555-9857',
        'Extension': '5467',
        'Photo': { 'Length': 21626 },
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp'    
    }];

export const columnData = [
    {
        "column_id": null,
        "index": 0,
        "rowIndex": "firstCell"
    },
    {
        "column_id": "mon",
        "index": 1,
        "name": "Monday" 
    },
    {
        "column_id": "tue",
        "index": 2,
        "name" : "Tuesday"
    },
    {
        "column_id": "wed",
        "index": 3,
        "name" : "Wednesday"
    },
    {
        "column_id": "thu",
        "index": 4,
        "name" : "Thursday"
    },
    {
        "column_id": "fri",
        "index": 5,
        "name" : "Friday"
    },
    {
        "column_id": "sat",
        "index": 6,
        "name" : "Saturday" 
    },
    {
        "column_id": "sun",
        "index": 7,
        "name" : "Sunday"
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
export const littleDragonsData = [
    {"column_id": "mon", 
            "rowIndex": "16",
            "venueID": "smsh",
            "startTime": "16:15:00",
            "endTime": "16:45:00"},
           
    {"column_id": "tue",     
            "rowIndex": "16",                   
            "venueID": "zksma_hq",
            "startTime": "16:15:00",
            "endTime": "16:45:00"},
       
    {"column_id": "tue",
            "rowIndex": "16",
            "venueID": "bpcc", 
            "startTime": "16:15:00",
            "endTime": "16:45:00"},
                 
    {"column_id": "thu",
            "rowIndex": "16",
            "venueID": "bpcc", 
            "startTime": "16:15:00",
            "endTime": "16:45:00"},
                          
    {"column_id": "thu",                "rowIndex": "16",
            "venueID": "flc",
            "startTime": "16:15:00",
            "endTime": "16:45:00"},
                        
    {"column_id": "fri",       
            "rowIndex": "16",
            "venueID": "zksma_hq",
            "startTime": "16:15:00",
            "endTime": "16:45:00"},
                        
    {"column_id": "sat",
            "rowIndex": "9",
            "venueID": "zksma_hq",
            "startTime": "09:00:00",
            "endTime": "10:00:00"},
                        
    {"column_id": "sat",                "rowIndex": "10",
            "venueID": "flc",
            "startTime": "10:00:00",
            "endTime": "11:00:00"}
]

export const miniNinjasData = [
   
    {"column_id": "mon", 
        "rowIndex": "17",
        "venueID": "zksma_hq",
        "startTime": "17:00:00",
        "endTime": "17:45:00"},
    
    {"column_id": "mon", 
        "rowIndex": "17",
        "venueID": "smsh",
        "startTime": "17:00:00",
        "endTime": "17:45:00"},
        
    {"column_id": "tue", 
        "rowIndex": "17",
        "venueID": "zksma_hq",
        "startTime": "17:00:00",
        "endTime": "17:45:00"},
                
    {"column_id": "tue", 
        "rowIndex": "17",
        "venueID": "bpcc",
        "startTime": "17:00:00",
        "endTime": "17:45:00"},                    
    
    {"column_id": "wed", 
        "rowIndex": "17",
        "venueID": "zksma_hq",
        "startTime": "17:00:00",
        "endTime": "17:45:00"},
                
    {"column_id": "wed", 
        "rowIndex": "18",
        "venueID": "wcc",
        "startTime": "18:00:00",
        "endTime": "18:45:00"},
        
    {"column_id": "thu", 
        "rowIndex": "17",
        "venueID": "bpcc",
        "startTime": "17:00:00",
        "endTime": "17:45:00"},
    
    {"column_id": "thu", 
        "rowIndex": "17",
        "venueID": "flc",
        "startTime": "17:00:00",
        "endTime": "17:45:00"},
                            
    {"column_id": "thu", 
        "rowIndex": "18",
        "venueID": "prps",
        "startTime": "18:30:00",
        "endTime": "19:15:00"},                    
                
    {"column_id": "fri", 
        "rowIndex": "17",
        "venueID": "zksma_hq",
        "startTime": "17:00:00",
        "endTime": "17:45:00"},
                        
    {"column_id": "fri", 
        "rowIndex": "17",
        "venueID": "flc",
        "startTime": "16:15:00",
        "endTime": "17:00:00"},                    
    
    {"column_id": "sat", 
        "rowIndex": "10",
        "venueID": "zksma_hq",
        "startTime": "10:00:00",
        "endTime": "10:45:00"},
    
    {"column_id": "sat", 
        "rowIndex": "11",
        "venueID": "flc",
        "startTime": "11:00:00",
        "endTime": "11:45:00"}                     
]
                 
export const juniorsData = [  
    
    {"column_id": "mon", 
        "rowIndex": "18",
        "venueID": "zksma_hq",
        "startTime": "18:00:00",
        "endTime": "18:45:00"},

    {"column_id": "mon", 
        "rowIndex": "18",
        "venueID": "smsh",
        "details": "8 - 9 year olds",
        "startTime": "18:00:00",
        "endTime": "18:45:00"},

    {"column_id": "mon", 
        "rowIndex": "19",
        "venueID": "smsh",
        "details": "10 - 11 year olds",
        "startTime": "19:00:00",
        "endTime": "19:45:00"},           
                        
    {"column_id": "tue", 
        "rowIndex": "18",
        "venueID": "zksma_hq",
        "startTime": "18:00:00",
        "endTime": "18:45:00"},

    {"column_id": "tue", 
        "rowIndex": "18",
        "venueID": "bpcc",
        "startTime": "18:00:00",
        "endTime": "18:45:00"},
                        
    {"column_id": "wed", 
        "rowIndex": "18",
        "venueID": "zksma_hq",
        "startTime": "18:00:00",
        "endTime": "18:45:00"},
    
    {"column_id": "wed", 
        "rowIndex": "18",
        "venueID": "wcc",
        "startTime": "18:00:00",
        "endTime": "18:45:00"},
                        
    {"column_id": "thu", 
        "rowIndex": "18",
        "venueID": "bpcc",
        "startTime": "18:00:00",
        "endTime": "18:45:00"},
                
    {"column_id": "thu", 
        "rowIndex": "18",
        "venueID": "flc",
        "startTime": "18:00:00",
        "endTime": "18:45:00"},
                        
    {"column_id": "thu", 
        "rowIndex": "18",
        "venueID": "prps",
        "startTime": "18:30:00",
        "endTime": "19:15:00"},                    
    
    {"column_id": "fri", 
        "rowIndex": "18",
        "venueID": "zksma_hq",
        "startTime": "18:00:00",
        "endTime": "18:45:00"},
    
    {"column_id": "fri", 
        "rowIndex": "17",
        "venueID": "flc",
        "startTime": "17:15:00",
        "endTime": "18:00:00"},
                        
    {"column_id": "sat", 
        "rowIndex": "11",
        "venueID": "zksma_hq",
        "details": "8 - 10 year olds",
        "startTime": "11:00:00",
        "endTime": "11:45:00"}, 

    {"column_id": "sat", 
        "rowIndex": "12",
        "venueID": "zksma_hq",
        "details": "10 - 12 year olds",
        "startTime": "12:00:00",
        "endTime": "12:45:00"},                   
        
    {"column_id": "sat", 
        "rowIndex": "12",
        "venueID": "flc",
        "startTime": "12:00:00",
        "endTime": "12:45:00"} 
]

export const teensData = [
    
    {"column_id": "mon", 
        "rowIndex": "19",
        "venueID": "zksma_hq",
        "startTime": "19:00:00",
        "endTime": "19:45:00"},
    
    {"column_id": "tue", 
        "rowIndex": "19",
        "venueID": "zksma_hq",
        "startTime": "19:00:00",
        "endTime": "19:45:00"},
                
    {"column_id": "wed", 
        "rowIndex": "19",
        "venueID": "zksma_hq",
        "startTime": "19:00:00",
        "endTime": "19:45:00"},
        
    {"column_id": "wed", 
        "rowIndex": "19",
        "venueID": "wcc",
        "startTime": "19:00:00",
        "endTime": "19:45:00"},
    
    {"column_id": "thu", 
        "rowIndex": "19",
        "venueID": "zksma_hq",
        "startTime": "19:00:00",
        "endTime": "19:45:00"},

    {"column_id": "thu", 
        "rowIndex": "19",
        "venueID": "flc",
        "startTime": "19:00:00",
        "endTime": "19:45:00"},
                        
    {"column_id": "sat", 
        "rowIndex": "13",
        "venueID": "zksma_hq",
        "startTime": "13:00:00",
        "endTime": "13:45:00"},
        
    {"column_id": "sat", 
        "rowIndex": "14",
        "venueID": "zksma_hq",
        "details": "Elite Class, by invite only",
        "startTime": "14:00:00",
        "endTime": "14:45:00"}
]

export const senData = [
 
    {"column_id": "sat", 
        "rowIndex": "12",
        "venueID": "zksma_hq",
        "details": "Autism Friendly, for 5 - 11 year olds",
        "startTime": "12:10:00",
        "endTime": "12:25:00"}
]
        
export const homeedData = [
 
    {"column_id": "fri", 
        "rowIndex": "11",
        "venueID": "zksma_hq",
        "details": "Home Schooled, for 5 - 11 year olds",
        "startTime": "11:00:00",
        "endTime": "11:45:00"}
]        
    
export const schoolsData = [
 
    {"column_id": "thu", 
        "rowIndex": "8",
        "venueID": "lms",
        "details": "School Pupils only, 5 - 11 year olds",
        "startTime": "08:00:00",
        "endTime": "08:45:00"}
]

export const zksmahqData = [
    
    {"column_id_mon": "mon", 
            "rowIndex": "17",
            "groupName": "Mini Ninjas",
            "startTime": "17:00:00",
            "endTime": "17:45:00"},

    {"column_id_mon": "mon", 
            "rowIndex": "18",
            "groupName": "Juniors MA",
            "startTime": "18:00:00",
            "endTime": "18:45:00"},

    {"column_id_mon": "mon", 
            "rowIndex": "19",
            "groupName": "Teens MA",
            "startTime": "19:00:00",
            "endTime": "19:45:00"},

    {"column_id_tue": "tue",     
            "rowIndex": "16",                   
            "groupName": "Little Dragons",
            "startTime": "16:15:00",
            "endTime": "16:45:00"},

    {"column_id_tue": "tue", 
            "rowIndex": "17",
            "groupName": "Mini Ninjas",
            "startTime": "17:00:00",
            "endTime": "17:45:00"},

    {"column_id_tue": "tue", 
            "rowIndex": "18",
            "groupName": "Juniors MA",
            "startTime": "18:00:00",
            "endTime": "18:45:00"},

    {"column_id_tue": "tue", 
            "rowIndex": "19",
            "groupName": "Teens MA",
            "startTime": "19:00:00",
            "endTime": "19:45:00"},

    {"column_id_wed": "wed", 
            "rowIndex": "17",
            "groupName": "Mini Ninjas",
            "startTime": "17:00:00",
            "endTime": "17:45:00"},
            
    {"column_id_wed": "wed", 
            "rowIndex": "18",
            "groupName": "Juniors MA",
            "startTime": "18:00:00",
            "endTime": "18:45:00"},

    {"column_id_wed": "wed", 
            "rowIndex": "19",
            "groupName": "Teens MA",
            "startTime": "19:00:00",
            "endTime": "19:45:00"},

    {"column_id_thu": "thu", 
            "rowIndex": "19",
            "groupName": "Teens MA",
            "startTime": "19:00:00",
            "endTime": "19:45:00"},

    {"column_id_fri": "fri", 
            "rowIndex": "11",
            "groupName": "Home Ed MA",
            "details": "Home Schooled, for 5 - 11 year olds",
            "startTime": "11:00:00",
            "endTime": "11:45:00"},

    {"column_id_fri": "fri",       
            "rowIndex": "16",
            "groupName": "Little Dragons",
            "startTime": "16:15:00",
            "endTime": "16:45:00"},

    {"column_id_fri": "fri", 
            "rowIndex": "17",
            "groupName": "Mini Ninjas",
            "startTime": "17:00:00",
            "endTime": "17:45:00"},

    {"column_id_fri": "fri", 
            "rowIndex": "18",
            "groupName": "Juniors MA",
            "startTime": "18:00:00",
            "endTime": "18:45:00"},
                        
    {"column_id_sat": "sat",
            "rowIndex": "9",
            "groupName": "Little Dragons",
            "startTime": "09:00:00",
            "endTime": "10:00:00"},

    {"column_id_sat": "sat", 
            "rowIndex": "10",
            "groupName": "Mini Ninjas",
            "startTime": "10:00:00",
            "endTime": "10:45:00"},

     {"column_id_sat": "sat", 
            "rowIndex": "11",
            "groupName": "Juniors MA",
            "details": "8 - 10 year olds",
            "startTime": "11:00:00",
            "endTime": "11:45:00"}, 

    {"column_id_sat": "sat", 
            "rowIndex": "12",
            "groupName": "S.E.N MA",
            "details": "Autism Friendly, for 5 -   11 year olds",
            "startTime": "12:10:00",
            "endTime": "12:25:00"},

    {"column_id_sat": "sat", 
            "rowIndex": "12",
            "groupName": "Juniors MA",
            "details": "10 - 12 year olds",
            "startTime": "12:00:00",
            "endTime": "12:45:00"},    

    {"column_id_sat": "sat", 
            "rowIndex": "13",
            "groupName": "Teens MA",
            "startTime": "13:00:00",
            "endTime": "13:45:00"},
        
    {"column_id_sat": "sat", 
            "rowIndex": "14",
            "groupName": "Teens MA",
            "details": "Elite Class, by invite only",
            "startTime": "14:00:00",
            "endTime": "14:45:00"}
    
]

export const bpccData = [

    {"column_id": "tue",
            "rowIndex": "16",
            "groupName": "Little Dragons", 
            "startTime": "16:15:00",
            "endTime": "16:45:00"},

    {"column_id": "tue", 
            "rowIndex": "17",
            "groupName": "Mini Ninjas",
            "startTime": "17:00:00",
            "endTime": "17:45:00"},
    
    {"column_id": "tue", 
            "rowIndex": "18",
            "groupName": "Juniors MA",
            "startTime": "18:00:00",
            "endTime": "18:45:00"},
                 
    {"column_id": "thu",
            "rowIndex": "16",
            "groupName": "Little Dragons", 
            "startTime": "16:15:00",
            "endTime": "16:45:00"},

    {"column_id": "thu", 
            "rowIndex": "17",
            "groupName": "Mini Ninjas",
            "startTime": "17:00:00",
            "endTime": "17:45:00"},

    {"column_id": "thu", 
            "rowIndex": "18",
            "groupName": "Juniors MA",
            "startTime": "18:00:00",
            "endTime": "18:45:00"},
]

export const flcData = [

        {"column_id": "thu",
            "rowIndex": "16",
            "groupName": "Little Dragons",
            "startTime": "16:15:00",
            "endTime": "16:45:00"},

        {"column_id": "thu", 
            "rowIndex": "17",
            "groupName": "Mini Ninjas",
            "startTime": "17:00:00",
            "endTime": "17:45:00"},

        {"column_id": "thu", 
            "rowIndex": "18",
            "groupName": "Juniors MA",
            "startTime": "18:00:00",
            "endTime": "18:45:00"},

        {"column_id": "thu", 
            "rowIndex": "19",
            "groupName": "Teens MA",
            "startTime": "19:00:00",
            "endTime": "19:45:00"},

        {"column_id": "fri", 
            "rowIndex": "17",
            "groupName": "Mini Ninjas",
            "startTime": "16:15:00",
            "endTime": "17:00:00"}, 
        
        {"column_id": "fri", 
            "rowIndex": "17",
            "groupName": "Juniors MA",
            "startTime": "17:15:00",
            "endTime": "18:00:00"},

        {"column_id": "sat",
            "rowIndex": "10",
            "groupName": "Little Dragons",
            "startTime": "10:00:00",
            "endTime": "11:00:00"},

        {"column_id": "sat", 
            "rowIndex": "11",
            "groupName": "Mini Ninjas",
            "startTime": "11:00:00",
            "endTime": "11:45:00"},

        {"column_id": "sat", 
            "rowIndex": "12",
            "groupName": "Juniors MA",
            "startTime": "12:00:00",
            "endTime": "12:45:00"} 
]

export const lmsData = [

    {"column_id": "thu", 
            "rowIndex": "8",
            "groupName": "Schools MA",
            "details": "School Pupils only, 5 - 11 year olds",
            "startTime": "08:00:00",
            "endTime": "08:45:00"}
   
]

export const smshData = [

    {"column_id": "mon", 
            "rowIndex": "16",
            "groupName": "Little Dragons",
            "startTime": "16:15:00",
            "endTime": "16:45:00"},

    {"column_id": "mon", 
            "rowIndex": "17",
            "groupName": "Mini Ninjas",
            "startTime": "17:00:00",
            "endTime": "17:45:00"},

    {"column_id": "mon", 
            "rowIndex": "18",
            "groupName": "Juniors MA",
            "details": "8 - 9 year olds",
            "startTime": "18:00:00",
            "endTime": "18:45:00"},

    {"column_id": "mon", 
            "rowIndex": "19",
            "groupName": "Juniors MA",
            "details": "10 - 11 year olds",
            "startTime": "19:00:00",
            "endTime": "19:45:00"}         
]

export const prpsData = [

    {"column_id": "thu", 
            "rowIndex": "18",
            "groupName": "Mini Ninjas & Juniors MA",
            "startTime": "18:30:00",
            "endTime": "19:15:00"}

]

export const wccData = [

    {"column_id": "wed", 
            "rowIndex": "18",
            "groupName": "Mini Ninjas",
            "startTime": "18:00:00",
            "endTime": "18:45:00"},
    
    {"column_id": "wed", 
            "rowIndex": "18",
            "groupName": "Juniors MA",
            "startTime": "18:00:00",
            "endTime": "18:45:00"},

    {"column_id": "wed", 
            "rowIndex": "19",
            "groupName": "Teens MA",
            "startTime": "19:00:00",
            "endTime": "19:45:00"},
]