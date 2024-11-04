export const configSheet = async () => {

    // pass Breakers sheet object to sheetConfig
    game.pbta.sheetConfig = {
        rollFormula: "2d6",
        rollResults: {
            failure: {
                start: null,
                end: 6,
                label: "Miss"
            },
            partial: {
                start: 7,
                end: 9,
                label: "Partial Success"
            },
            success: {
                start: 10,
                end: 12,
                label: "Full Success!"
            },
            crit_success: {
              start: 12,
              end: 15,
              label: "Critical Success!"
            }
        },
        actorTypes: {
            character: {
                stats: {
                    insight: {
                        label: "Insight",
                        value: 0
                    },
                    prowess: {
                        label: "Prowess",
                        value: 0
                    },
                    resolve: {
                        label: "Resolve",
                        value: 0
                    },
                },
                attributes: {
                    look: {
                        position: "Left",
                        label: "Look",
                        type: "LongText",
                        playbook: true,
                    },
                    background: {
                        position: "TopBar",
                        label: "Background",
                        type: "Text",
                        playbook: true
                    },
                    backgroundType: {
                        position: "TopBar",
                        type: "Text",
                        playbook: true,
                        value: "",
                        options: {
                            1: {
                                label: "Civilian",
                                name: "civilian",
                            },
                            2: {
                                label: "Criminal",
                                name: "criminal",
                            },
                            3: {
                                label: "Military",
                                name: "military",
                            },
                            4: {
                                label: "Science",
                                name: "science",
                            },
                            5: {
                                label: "Weird",
                                name: "weird",
                            },
                        }
                    },
                    experience: {
                        position: "TopBar",
                        label: "Experience",
                        type: "Xp",
                        max: 10,
                        value: 0,
                        playbook: true,
                    },
                    strain: {
                        position: "TopBar",
                        label: "Strain",
                        type: "Xp",
                        max: 5,
                        value: 0,
                        playbook: true,
                    },
                    levels: {
                        position: "TopBar",
                        label: "Levels",
                        type: "ListMany",
                        playbook: true,
                        options: {
                            1: {
                                label: "Colt",
                                value: false,
                            },
                            2: {
                                label: "Pro",
                                value: false,
                            },
                            3: {
                                label: "Ace",
                                value: false,
                            },
                            4: {
                                label: "Veteran",
                                value: false,
                            },
                        }
                    },
                    armor: {
                        position: "TopBar",
                        label: "Armor",
                        type: "Number",
                        value: 0,
                        playbook: true,
                    },
                    hitPoints: {
                        position: "TopBar",
                        label: "HP",
                        type: "Number",
                        value: 0,
                        playbook: true,
                    },
                    equipment: {
                        playbook: true,
                        position: "EquipTab",
                        type: "ListMany",
                        pack: {
                            firstAid: {
                                label: "First&nbsp;Aid",
                                type: "defined",
                                maxUses: 3,
                                value: 0,
                                subUses: 0,
                                relWidth: 2,
                                breakAfter: false,
                            },
                            supplies: {
                                label: "Supplies",
                                type: "defined",
                                maxUses: 3,
                                value: 0,
                                subUses: 0,
                                relWidth: 2,
                                breakAfter: true,
                            },
                            repairKit: {
                                label: "Repair&nbsp;Kit",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 1,
                                breakAfter: false,
                            },
                            techKit: {
                                label: "Tech&nbsp;Kit",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 1,
                                breakAfter: false,
                            },
                            c4: {
                                label: "C-4",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 1,
                                breakAfter: true,
                            },
                            climbingGear: {
                                label: "Climbing&nbsp;Gear",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 2,
                                breakAfter: false,
                            },
                            heavyTools: {
                                label: "Heavy&nbsp;Tools",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 2,
                                breakAfter: true,
                            },
                            hazmatGear: {
                                label: "HAZMAT&nbsp;Gear",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 2,
                                breakAfter: false,
                            },
                            scubaGear: {
                                label: "SCUBA&nbsp;Gear",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 2,
                                breakAfter: true,
                            },
                            extraPack1: {
                                label: "",
                                type: "free",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            extraPack2: {
                                label: "",
                                type: "free",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            extraPack3: {
                                label: "",
                                type: "free",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            extraPack4: {
                                label: "",
                                type: "free",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            extraPack5: {
                                label: "",
                                type: "free",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            extraPack6: {
                                label: "",
                                type: "free",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            loot: {
                                label: "Loot",
                                type: "defined",
                                maxUses: 8,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            }
                        },
                        onHand: {
                            rig: {
                                label: "Rig: Radio, Flashlight, Zip-Ties, Glow Sticks, Lighter, Multi-Tool",
                                type: "defined",
                                maxUses: 0,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            armor1: {
                                label: "Armor",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 1,
                                breakAfter: false,
                            },
                            armor2: {
                                label: "Armor",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 1,
                                breakAfter: false,
                            },
                            shield: {
                                label: "Shield",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 1,
                                breakAfter: true,
                            },
                            weapon1: {
                                label: "Weapon",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 1,
                                breakAfter: false,
                            },
                            weapon2: {
                                label: "Weapon",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 1,
                                breakAfter: false,
                            },
                            spacer: {
                                label: "&nbsp;",
                                type: "defined",
                                maxUses: 0,
                                value: 0,
                                subUses: 0,
                                relWidth: 1,
                                breakAfter: true,
                            },
                            specialWeapon: {
                                label: "Special&nbsp;Weapon",
                                type: "defined",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            grenades: {
                                label: "Grenades",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 2,
                                relWidth: 2,
                                breakAfter: false,
                            },
                            flashBangs: {
                                label: "Flashbangs",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 2,
                                relWidth: 2,
                                breakAfter: true,
                            },
                            nvgGaskMask: {
                                label: "NVGs+&nbsp;Gas&nbsp;Mask",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 2,
                                breakAfter: false,
                            },
                            scanner: {
                                label: "Scanner",
                                type: "defined",
                                maxUses: 1,
                                value: 0,
                                subUses: 0,
                                relWidth: 2,
                                breakAfter: true,
                            },
                            extraHand1: {
                                label: "",
                                type: "free",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            extraHand2: {
                                label: "",
                                type: "free",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            extraHand3: {
                                label: "",
                                type: "free",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                            extraHand4: {
                                label: "",
                                type: "free",
                                maxUses: 2,
                                value: 0,
                                subUses: 0,
                                relWidth: 3,
                                breakAfter: true,
                            },
                        }
                    },
                    load: {
                        playbook: true,
                        position: "EquipTab",
                        type: "ListMany",
                        options: {
                            speed1: {
                                label: "Very Fast",
                                packLimit: 2,
                                handLimit: 1,
                                value: 0,
                            },
                            speed2: {
                                label: "Fast",
                                packLimit: 3,
                                handLimit: 2,
                                value: 0,
                            },
                            speed3: {
                                label: "Normal",
                                packLimit: 5,
                                handLimit: 3,
                                value: 0,
                            },
                            speed4: {
                                label: "Slow",
                                packLimit: 8,
                                handLimit: 5,
                                value: 0,
                            },
                        }
                    },
                },
                moveTypes: {
                    talent: {
                        label: "Talents",
                        creation: false
                    }
                },
            },
            npc: {
                attributes: {
                    notes: {
                        position: "Left",
                        label: "Notes",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        value: ""
                    },
                    description: {
                        position: "Left",
                        label: "Description",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        value: ""
                    }
                },
                moveTypes: {
                    mc: {
                        label: "MC Moves",
                        moves: []
                    }
                },
            }
        }
    }

    // check if users wants to override settings; if not, hide all PbtA sheet options
    let overrideSettings = await game.settings.get('wod-turbo-breakers-pbta-foundryvtt', 'settings-override');

    if (!overrideSettings) {
        await game.settings.set('pbta', 'advForward', true);
        await game.settings.set('pbta', 'hideRollFormula', true);
        await game.settings.set('pbta', 'hideForward', true);
        await game.settings.set('pbta', 'hideOngoing', true);
        await game.settings.set('pbta', 'hideRollMode', true);
        await game.settings.set('pbta', 'hideUses', true);
    }

}
