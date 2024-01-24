let boardsArray = 
[
    [
        {
            title: "Platform Launch"
        },

        [ /*column1 array*/ 
            [ /*column1*/
                {
                    header: "TODO (3)"
                },
                [/*cards array*/
                    { /*card1*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card2*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card3*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    }
                ],
            ],
            [ /*column2*/
                {
                    header: "DOING (4)"
                },
                [/*cards array*/
                    { /*card1*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card2*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card3*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card4*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    }
                ],
            ]
        ],
        [ /*column2 array*/ 
            [ /*column1*/
                {
                    header: "DOING (3)"
                },
                [/*cards array*/
                    { /*card1*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card2*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card3*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    }
                ],
            ],
            [ /*column2*/
                {
                    header: "DOING (4)"
                },
                [/*cards array*/
                    { /*card1*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card2*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card3*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card4*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    }
                ],
            ]
        ],
    ],
    [
        {
            title: "Marketing Plan"
        },

        [ /*column1 array*/ 
            [ /*column1*/
                {
                    header: "TODO (3)"
                },
                [/*cards array*/
                    { /*card1*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card2*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card3*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    }
                ],
            ],
            [ /*column2*/
                {
                    header: "DOING (4)"
                },
                [/*cards array*/
                    { /*card1*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card2*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card3*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card4*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    }
                ],
            ]
        ],
        [ /*column2 array*/ 
            [ /*column1*/
                {
                    header: "DOING (3)"
                },
                [/*cards array*/
                    { /*card1*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card2*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card3*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    }
                ],
            ],
            [ /*column2*/
                {
                    header: "DOING (4)"
                },
                [/*cards array*/
                    { /*card1*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card2*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card3*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    },
                    { /*card4*/
                        description: "Build UI for onboarding flow",
                        numberOfSubtasks: "0 of 3 subtasks"
                    }
                ],
            ]
        ],
    ],
];

const titleOfBoardNavbar = document.getElementById("titleOfBoardNavbar");
const boardsCards = document.querySelectorAll(".boards-cards");

function handleClick() 
{
    let title = this.querySelector('.titleOfBoardSidebar').textContent;
  
    let board = boardsArray.find( function (board) 
    {
      return board.title === title;
    });
  
    if (board) 
    {
      titleOfBoardNavbar.textContent = board.title;
    }
  }
  
boardsCards.forEach( function (card) 
{
    card.addEventListener('click', handleClick);
});


