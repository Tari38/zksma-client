Object.defineProperty(exports, "__esModule", { value: true });
exports.getReminderEvents = exports.getReadOnlyEventsData = exports.generateObject = exports.applyCategoryColor = void 0;
/**
 * Schedule util
 */
function applyCategoryColor(args, currentView) {
    var categoryColor = args.data.CategoryColor;
    if (!args.element || !categoryColor) {
        return;
    }
    if (currentView === 'Week') {
        args.element.firstChild.style.borderLeftColor = categoryColor;
    }
    else {
        args.element.style.backgroundColor = categoryColor;
    }
}
exports.applyCategoryColor = applyCategoryColor;
function generateObject(id) {
//     if (start === void 0) { start = new Date(2020, 6, 1).getTime(); }
//     if (end === void 0) { end = new Date(2021, 11, 31).getTime(); }
//     if (isWeekDaysOnly === void 0) { isWeekDaysOnly = false; }
    var data = [];
    var names = [
        'Story Time for Kids', 'Camping with Turtles', 'Wildlife Warriors', 'Parrot Talk', 'Birds of Prey', 'Croco World',
        'Venomous Snake Hunt', 'Face Painting & Drawing events', 'Pony Rides', 'Feed the Giants', 'Jungle Treasure Hunt',
        'Endangered Species Program', 'Black Cockatoos Playtime', 'Walk with Jungle King', 'Trained Climbers', 'Playtime with Chimpanzees',
        'Meet a small Mammal', 'Amazon Fish Feeding', 'Elephant Ride'
    ];
    var timeslot_start;
    var timeslot_end;
    (data.push({
                Id: id,
                Subject: names[0],
                StartTime: timeslot_start,
                EndTime: timeslot_end
                
            }));
            id++;
            return data;
        }
    

exports.generateObject = generateObject;

function getReadOnlyEventsData() {
    
    var readonlyEventsData = [
        {
            Id: 1,
            Subject: 'Project Workflow Analysis',            
            IsReadonly: true
        }, {
            Id: 2,
            Subject: 'Project Requirement Planning',            
            IsReadonly: true
        }, {
            Id: 3,
            Subject: 'Meeting with Developers',            
            IsReadonly: true
        }, {
            Id: 4,
            Subject: 'Team Fun Activities',            
            IsReadonly: true
        }, {
            Id: 5,
            Subject: 'Quality Analysis',            
            IsReadonly: false
        }, {
            Id: 6,
            Subject: 'Customer meeting John Mackenzie',            
            IsReadonly: false
        }, {
            Id: 7,
            Subject: 'Meeting with Core team',            
            IsReadonly: false
        }, {
            Id: 8,
            Subject: 'Project Review',            
            IsReadonly: false
        }, {
            Id: 9,
            Subject: 'Project demo meeting with Andrew',           
            IsReadonly: false
        }, {
            Id: 10,
            Subject: 'Online Hosting of Project',            
            IsReadonly: false
        }
    ];
    return readonlyEventsData;
}
exports.getReadOnlyEventsData = getReadOnlyEventsData;
function getReminderEvents() {
    
    var reminderEvents = [
        {
            Id: 1,
            Subject: 'Explosion of Betelgeuse Star',
            Location: 'Space Center USA'           
        }, {
            Id: 2,
            Subject: 'Thule Air Crash Report',
            Location: 'Newyork City'            
        }, {
            Id: 3,
            Subject: 'Milky Way as Melting pot',
            Location: 'Space Center USA'            
        }, {
            Id: 4,
            Subject: 'Blue Moon Eclipse',
            Location: 'Space Center USA'            
        }, {
            Id: 5,
            Subject: 'Mysteries of Bermuda Triangle',
            Location: 'Bermuda'        
        }
    ];
    return reminderEvents;
}
exports.getReminderEvents = getReminderEvents;
