export const PRODUCT_MENU = [
    {
        path: 'amhi',
        children: [            
            {
                path: 'dashboard',
                data: {
                    menu: {
                        title: 'Dashboard',
                        icon: 'fa fa-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            },
            {
                path: 'product',
                data: {
                    menu: {
                        title: 'Product',
                        icon: 'fa fa-laptop',
                        selected: false,
                        expanded: false,
                        order: 300,
                    }
                },
                children: [
                    {
                        path: 'home',
                        data: {
                            menu: {
                                title: 'Home',
                            }
                        }
                    },
                    {
                        path: 'groupproduct',
                        data: {
                            menu: {
                                title: 'Group Product',
                            }
                        }
                    }
                ]
            },
            {
                path: 'provider',
                data: {
                    menu: {
                        title: 'Provider',
                        icon: 'fa fa-laptop',
                        selected: false,
                        expanded: false,
                        order: 300,
                    }
                },
                children: [
                    {
                        path: 'home',
                        data: {
                            menu: {
                                title: 'Home',
                            }
                        }
                    },
                    {
                        path: 'preferrednetwork',
                        data: {
                            menu: {
                                title: 'Network Provider',
                            }
                        }
                    },
                    {
                        path: 'tariffcomparision',
                        data: {
                            menu: {
                                title: 'Tariff Comparison',
                            }
                        }
                    }
//                    ,{
//                        path: 'networkprovider',
//                        data: {
//                            menu: {
//                                title: 'Network Provider',
//                            }
//                        }
//                    }

                ]
            },
            {
                path: 'admin',
                data: {
                    menu: {
                        title: 'Admin',
                        icon: 'fa fa-laptop',
                        selected: false,
                        expanded: false,
                        order: 300,
                    }
                },
                children: [
                    {
                        path: 'communication',
                        data: {
                            menu: {
                                title: 'Communication Configuration',
                            }
                        }
                    }
                ]
            }
        ]
    }
];
