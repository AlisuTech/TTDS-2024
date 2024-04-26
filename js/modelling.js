let students = [
  {
    fname: "String",
    lname: "String",
    schedules: [
      {
        day: "String",
        time_start: "DateTime",
        time_end: "DateTime",
      },
    ],
    transactions: [
      {
        trans_name: "String",
        trans_date: "String",
      },
    ],
  },
];
let schedules = [
  {
    day: "String",
    time_start: "DateTime",
    time_end: "DateTime",
  },
];
let instructors = [
  {
    fname: "String",
    lname: "String",
    schedules: [
      {
        day: "String",
        time_start: "DateTime",
        time_end: "DateTime",
      },
    ],
  },
];
let transactions = [
  {
    trans_name: "String",
    trans_date: "String",
  },
];
let courses = [
  {
    course_name: "String",
    school_yr: "String",
    schedules: [
      {
        day: "String",
        time_start: "DateTime",
        time_end: "DateTime",
      },
    ],
    subjects: [
      {
        name: "String",
        schedules: [
          {
            day: "String",
            time_start: "DateTime",
            time_end: "DateTime",
          },
        ],
      },
    ],
  },
];
let subjects = [
  {
    name: "String",
    schedules: [
      {
        day: "String",
        time_start: "DateTime",
        time_end: "DateTime",
      },
    ],
  },
];
let school = {
  students: students,
  instructors: instructors,
  subjects: subjects,
  transactions: transactions,
  courses: courses,
  schedules: schedules,
};
//JSON - Database - Functional


// Medical Management System

let patients=[
    {
        name:"Theresa",
        address:"Manchester",
        healthcareno:"String",
        appointments:[
            {
                appointmentDate:"today",
                symptoms:["cough","catarrh"],
                complaint:"I no wan die",
                healthcareno:"String",
                hospital_id:"special no",
                doctor:{

                }
            }
        ]
    }
]
let hospitals=[
    
]
let departments=[
    {
        name:"Security",
        personnels:[
            {
                name:"Jacob",
                unit:"Accident and Emergency",
                schedules:[
                    {
                        name:"January",
                        daysTime:[
                            {
                                date:"22/05/01",
                                time:"Afternoon Shift"
                            }
                        ]
                    }
                ]
            },
            {
                name:"Philip",
                unit:"O and G"
            }

        ]
    },
    {
        name:"Food",
        personnels:[
            {
                name:"Gideon",
                unit:"Meal"
            }
        ]
    }
]
let doctors=[]
let pharmacy={
    personnel:[
        {
            name:"Pharm. Obi",
            schedules:[
                {
                    name:"January",
                    daysTime:[
                        {
                            date:"22/05/01",
                            time:"Afternoon Shift"
                        }
                    ]
                }
            ]
        },
        {
            name:"Pharm. Odi",
            schedules:[
                {
                    name:"January",
                    daysTime:[
                        {
                            date:"22/05/01",
                            time:"Afternoon Shift"
                        }
                    ]
                }
            ]
        }
    ],
    drugs:[
        {
            name:"drug one",
            price:300
        }
    ]
}
let diagnostics=[
    {
        name:"Laboratory"
    },
    {
        name:"XRay"
    },
    {
        name:"Cardiac Lab"
    }
]

