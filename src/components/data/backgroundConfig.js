const configs = {
    defaultConfig: {
        background: {
            color: {
                value: "#D9D9D9"
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push"
                },
                onHover: {
                    enable: true,
                    mode: "repulse"
                }
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40
                },
                grab: {
                    distance: 400
                }
            }
        },
        particles: {
            color: {
                value: "#ff0000",
                animation: {
                    enable: true,
                    speed: 20
                }
            },
            links: {
                color: {
                    value: "#ffffff"
                },
                enable: true,
                opacity: 0.4
            },
            move: {
                attract: {
                    rotate: {
                        x: 600,
                        y: 1200
                    }
                },
                enable: true,
                outModes: {
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out"
                },
                speed: 6
            },
            number: {
                density: {
                    enable: true
                },
                value: 80
            },
            opacity: {
                value: 0.5,
                animation: {
                    minimumValue: 0.1,
                    speed: 3
                }
            },
            shape: {
                options: {
                    polygon: {
                        nb_sides: 5
                    },
                    star: {
                        nb_sides: 5
                    },
                    image: {
                        src: "https://particles.js.org/images/github.svg",
                        width: 100,
                        height: 100
                    },
                    images: {
                        src: "https://particles.js.org/images/github.svg",
                        width: 100,
                        height: 100
                    }
                }
            },
            size: {
                random: {
                    enable: true
                },
                animation: {
                    minimumValue: 0.1,
                    speed: 20
                }
            }
        }
    },
    catConfig: {
        background: {
            color: {
                value: "#043564"
            },
            image: "url('http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
            position: "0 50%",
            repeat: "no-repeat",
            size: "60%"
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse"
                },
                onHover: {
                    mode: "grab"
                }
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 8,
                    size: 40
                },
                grab: {
                    distance: 200
                }
            }
        },
        particles: {
            color: {
                value: "#ffffff"
            },
            links: {
                color: {
                    value: "#ffffff"
                },
                distance: 150,
                opacit: 0.4
            },
            move: {
                attract: {
                    rotate: {
                        x: 600,
                        y: 1200
                    }
                },
                direction: "left",
                enable: true,
                outModes: {
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out"
                },
                speed: 6,
                straight: true
            },
            opacity: {
                value: 0.5,
                animation: {
                    minimumValue: 0.1,
                    speed: 1
                }
            },
            shape: {
                options: {
                    star: {
                        sides: 5
                    }
                },
                type: "star"
            },
            size: {
                random: {
                    enable: true
                },
                value: 4,
                animation: {
                    minimumValue: 0.1,
                    speed: 40
                }
            }
        }
    }, spaceConfig: {
        background: {
            color: {
                value: "#232741"
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "20%"
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse"
                },
                onHover: {
                    enable: true,
                    mode: "bubble"
                }
            },
            modes: {
                bubble: {
                    distance: 250,
                    duration: 2,
                    opacity: 0,
                    size: 0
                },
                grab: {
                    distance: 400
                },
                repulse: {
                    distance: 400
                }
            }
        },
        particles: {
            color: {
                value: "#ffffff"
            },
            links: {
                color: {
                    value: "#ffffff"
                },
                distance: 150,
                opacity: 0.4
            },
            move: {
                attract: {
                    rotate: {
                        x: 600,
                        y: 600
                    }
                },
                enable: true,
                outMode: {
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out"
                },
                random: true,
                speed: 1
            },
            number: {
                density: {
                    enable: true
                },
                value: 160
            },
            opacity: {
                random: {
                    enable: true
                },
                animation: {
                    enable: true,
                    speed: 1
                }
            },
            size: {
                random: {
                    enable: true
                },
                animation: {
                    minimumValue: 0.3,
                    speed: 4
                }
            }
        }
    }
}

module.exports = configs;