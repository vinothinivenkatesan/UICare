export const DEMO_MENU = [
    {
        path: 'demo',
        children: [
            {
                path: 'accordion',
                data: {
                    menu: {
                        title: 'Accordion',
                        icon: 'fa fa-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            }, {
                path: 'tabs',
                data: {
                    menu: {
                        title: 'Tabs',
                        icon: 'fa fa-tags',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            }, 
            {
                path: 'timeout',
                data: {
                    menu: {
                        title: 'Timeout',
                        icon: 'fa fa-clock-o',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            }, 
//            {
//                path: 'scrolltab',
//                data: {
//                    menu: {
//                        title: 'Scroll Tab',
//                        icon: 'fa fa-cogs',
//                        selected: false,
//                        expanded: false,
//                        order: 0
//                    }
//                }
//            },
            {
                path: 'tables',
                data: {
                    menu: {
                        title: 'Tables',
                        icon: 'fa fa-table',
                        selected: false,
                        expanded: false,
                        order: 300,
                    }
                },
                children: [
                    {
                        path: 'basictables',
                        data: {
                            menu: {
                                title: 'Basic Table',
                            }
                        }
                    },
                    {
                        path: 'generictables',
                        data: {
                            menu: {
                                title: 'Generic Table',
                            }
                        }
                    }
                ]
            }, {
                path: 'forms',
                data: {
                    menu: {
                        title: 'Form Elements',
                        icon: 'fa fa-server',
                        selected: false,
                        expanded: false,
                        order: 400,
                    }
                },
                children: [
                    {
                        path: 'inputs',
                        data: {
                            menu: {
                                title: 'Form Inputs',
                            }
                        }
                    },
                    {
                        path: 'layouts',
                        data: {
                            menu: {
                                title: 'Form Layouts',
                            }
                        }
                    },
                    {
                        path: 'validations',
                        data: {
                            menu: {
                                title: 'Form Validations',
                            }
                        }
                    }
                ]
            }, {
                path: 'ui',
                data: {
                    menu: {
                        title: 'UI Features',
                        icon: 'fa fa-magic',
                        selected: false,
                        expanded: false,
                        order: 300,
                    }
                },
                children: [
                    {
                        path: 'typography',
                        data: {
                            menu: {
                                title: 'Typography',
                            }
                        }
                    },
                    {
                        path: 'buttons',
                        data: {
                            menu: {
                                title: 'Buttons',
                            }
                        }
                    },
                    {
                        path: 'icons',
                        data: {
                            menu: {
                                title: 'Icons',
                            }
                        }
                    },
                    {
                        path: 'modal',
                        data: {
                            menu: {
                                title: 'Modal',
                            }
                        }
                    },
                    {
                        path: 'megamenu',
                        data: {
                            menu: {
                                title: 'Megamenu',
                            }
                        }
                    },
                    {
                        path: 'grid',
                        data: {
                            menu: {
                                title: 'Grid',
                            }
                        }
                    },
                    {
                        path: 'notification',
                        data: {
                            menu: {
                                title: 'Notification',
                            }
                        }
                    },
                    {
                        path: 'tooltip',
                        data: {
                            menu: {
                                title: 'Tooltip',
                            }
                        }
                    },
                    {
                        path: 'progressbar',
                        data: {
                            menu: {
                                title: 'Progressbar',
                            }
                        }
                    },
                    {
                        path: 'editor',
                        data: {
                            menu: {
                                title: 'Editor',
                            }
                        }
                    }
                ]
            },
            {
                path: 'poc',
                data: {
                    menu: {
                        title: 'POC',
                         icon: 'fa fa-bullhorn',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                },
                children: [
                    {
                        path: 'referecedata',
                        data: {
                            menu: {
                                title: 'Reference Data',
                            }
                        }
                    },
                    {
                        path: 'claimentry',
                        data: {
                            menu: {
                                title: 'Claims Data Entry',
                            }
                        }
                    },
                    {
                        path: 'planvariantcoverages',
                        data: {
                            menu: {
                                title: 'Plan Variant Coverages',
                            }
                        }
                    },                   
                    {
                        path: 'tagWithMultiselect',
                        data: {
                            menu: {
                                title: 'Tag With Multiselect',
                            }
                        }
                    },
                    {
                        path: 'crud',
                        data: {
                            menu: {
                                title: 'Crud',
                            }
                        }
                    },
                    {
                        path: 'coverageMaster',
                        data: {
                            menu: {
                                title: 'Coverage Master',
                            }
                        }
                    }
                ]
            },
        ]
    }
];
