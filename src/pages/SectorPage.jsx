import { Link } from "react-router-dom";
import { SECTOR_ICON_URL } from "../config/urlConfig";

function capitalizeFirstLetter(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export default function SectorPage() {
    const sectorData = [
        {
            "sector": "Metals & Mining",
            "sector_description": null,
            "sector_logo": "metals_and_mining.png",
            "industries": [
                {
                    "industry_id": 1,
                    "industry_name": "Minerals & Mining",
                    "industry_description": null,
                    "industry_logo": "minerals_and_mining.png"
                },
                {
                    "industry_id": 21,
                    "industry_name": "Metals & Minerals Trading",
                    "industry_description": null,
                    "industry_logo": "metals_and_minerals_trading.png"
                },
                {
                    "industry_id": 37,
                    "industry_name": "Ferrous Metals",
                    "industry_description": null,
                    "industry_logo": "ferrous_metals.png"
                },
                {
                    "industry_id": 46,
                    "industry_name": "Non - Ferrous Metals",
                    "industry_description": null,
                    "industry_logo": "non_ferrous_metals.png"
                },
                {
                    "industry_id": 58,
                    "industry_name": "Diversified Metals",
                    "industry_description": null,
                    "industry_logo": "diversified_metals.png"
                }
            ]
        },
        {
            "sector": "Financial Services",
            "sector_description": null,
            "sector_logo": "financial_services.png",
            "industries": [
                {
                    "industry_id": 2,
                    "industry_name": "Capital Markets",
                    "industry_description": null,
                    "industry_logo": "capital_markets.png"
                },
                {
                    "industry_id": 5,
                    "industry_name": "Finance",
                    "industry_description": null,
                    "industry_logo": "finance.png"
                },
                {
                    "industry_id": 33,
                    "industry_name": "Financial Technology (Fintech)",
                    "industry_description": null,
                    "industry_logo": "financial_technology_(fintech).png"
                },
                {
                    "industry_id": 41,
                    "industry_name": "Banks",
                    "industry_description": null,
                    "industry_logo": "banks.png"
                },
                {
                    "industry_id": 54,
                    "industry_name": "Insurance",
                    "industry_description": null,
                    "industry_logo": "insurance.png"
                }
            ]
        },
        {
            "sector": "Information Technology",
            "sector_description": null,
            "sector_logo": "information_technology.png",
            "industries": [
                {
                    "industry_id": 3,
                    "industry_name": "IT - Software",
                    "industry_description": null,
                    "industry_logo": "it_software.png"
                },
                {
                    "industry_id": 26,
                    "industry_name": "IT - Services",
                    "industry_description": null,
                    "industry_logo": "it_services.png"
                },
                {
                    "industry_id": 49,
                    "industry_name": "IT - Hardware",
                    "industry_description": null,
                    "industry_logo": "it_hardware.png"
                }
            ]
        },
        {
            "sector": "Diversified",
            "sector_description": null,
            "sector_logo": "diversified.png",
            "industries": [
                {
                    "industry_id": 4,
                    "industry_name": "Diversified",
                    "industry_description": null,
                    "industry_logo": "diversified.png"
                }
            ]
        },
        {
            "sector": "Construction",
            "sector_description": null,
            "sector_logo": "construction.png",
            "industries": [
                {
                    "industry_id": 6,
                    "industry_name": "Construction",
                    "industry_description": null,
                    "industry_logo": "construction.png"
                }
            ]
        },
        {
            "sector": "Services",
            "sector_description": null,
            "sector_logo": "services.png",
            "industries": [
                {
                    "industry_id": 7,
                    "industry_name": "Commercial Services & Supplies",
                    "industry_description": null,
                    "industry_logo": "commercial_services_and_supplies.png"
                },
                {
                    "industry_id": 18,
                    "industry_name": "Transport Services",
                    "industry_description": null,
                    "industry_logo": "transport_services.png"
                },
                {
                    "industry_id": 22,
                    "industry_name": "Transport Infrastructure",
                    "industry_description": null,
                    "industry_logo": "transport_infrastructure.png"
                },
                {
                    "industry_id": 52,
                    "industry_name": "Engineering Services",
                    "industry_description": null,
                    "industry_logo": "engineering_services.png"
                },
                {
                    "industry_id": 59,
                    "industry_name": "TRADING",
                    "industry_description": null,
                    "industry_logo": "trading.png"
                }
            ]
        },
        {
            "sector": "Oil Gas & Consumable Fuels",
            "sector_description": null,
            "sector_logo": "oil_gas_and_consumable_fuels.png",
            "industries": [
                {
                    "industry_id": 8,
                    "industry_name": "Oil",
                    "industry_description": null,
                    "industry_logo": "oil.png"
                },
                {
                    "industry_id": 28,
                    "industry_name": "Gas",
                    "industry_description": null,
                    "industry_logo": "gas.png"
                },
                {
                    "industry_id": 38,
                    "industry_name": "Consumable Fuels",
                    "industry_description": null,
                    "industry_logo": "consumable_fuels.png"
                },
                {
                    "industry_id": 48,
                    "industry_name": "Petroleum Products",
                    "industry_description": null,
                    "industry_logo": "petroleum_products.png"
                }
            ]
        },
        {
            "sector": "Healthcare",
            "sector_description": null,
            "sector_logo": "healthcare.png",
            "industries": [
                {
                    "industry_id": 9,
                    "industry_name": "Pharmaceuticals & Biotechnology",
                    "industry_description": null,
                    "industry_logo": "pharmaceuticals_and_biotechnology.png"
                },
                {
                    "industry_id": 29,
                    "industry_name": "Healthcare Services",
                    "industry_description": null,
                    "industry_logo": "healthcare_services.png"
                },
                {
                    "industry_id": 57,
                    "industry_name": "Healthcare Equipment & Supplies",
                    "industry_description": null,
                    "industry_logo": "healthcare_equipment_and_supplies.png"
                }
            ]
        },
        {
            "sector": "Capital Goods",
            "sector_description": null,
            "sector_logo": "capital_goods.png",
            "industries": [
                {
                    "industry_id": 10,
                    "industry_name": "Industrial Manufacturing",
                    "industry_description": null,
                    "industry_logo": "industrial_manufacturing.png"
                },
                {
                    "industry_id": 11,
                    "industry_name": "Electrical Equipment",
                    "industry_description": null,
                    "industry_logo": "electrical_equipment.png"
                },
                {
                    "industry_id": 19,
                    "industry_name": "Agricultural Commercial & Construction Vehicles",
                    "industry_description": null,
                    "industry_logo": "agricultural_commercial_and_construction_vehicles.png"
                },
                {
                    "industry_id": 25,
                    "industry_name": "Industrial Products",
                    "industry_description": null,
                    "industry_logo": "industrial_products.png"
                },
                {
                    "industry_id": 39,
                    "industry_name": "Aerospace & Defense",
                    "industry_description": null,
                    "industry_logo": "aerospace_and_defense.png"
                }
            ]
        },
        {
            "sector": "Chemicals",
            "sector_description": null,
            "sector_logo": "chemicals.png",
            "industries": [
                {
                    "industry_id": 12,
                    "industry_name": "Chemicals & Petrochemicals",
                    "industry_description": null,
                    "industry_logo": "chemicals_and_petrochemicals.png"
                },
                {
                    "industry_id": 32,
                    "industry_name": "Fertilizers & Agrochemicals",
                    "industry_description": null,
                    "industry_logo": "fertilizers_and_agrochemicals.png"
                }
            ]
        },
        {
            "sector": "Textiles",
            "sector_description": null,
            "sector_logo": "textiles.png",
            "industries": [
                {
                    "industry_id": 13,
                    "industry_name": "Textiles & Apparels",
                    "industry_description": null,
                    "industry_logo": "textiles_and_apparels.png"
                }
            ]
        },
        {
            "sector": "Fast Moving Consumer Goods",
            "sector_description": null,
            "sector_logo": "fast_moving_consumer_goods.png",
            "industries": [
                {
                    "industry_id": 14,
                    "industry_name": "Beverages",
                    "industry_description": null,
                    "industry_logo": "beverages.png"
                },
                {
                    "industry_id": 23,
                    "industry_name": "Food Products",
                    "industry_description": null,
                    "industry_logo": "food_products.png"
                },
                {
                    "industry_id": 31,
                    "industry_name": "Agricultural Food & other Products",
                    "industry_description": null,
                    "industry_logo": "agricultural_food_and_other_products.png"
                },
                {
                    "industry_id": 36,
                    "industry_name": "Household Products",
                    "industry_description": null,
                    "industry_logo": "household_products.png"
                },
                {
                    "industry_id": 45,
                    "industry_name": "Personal Products",
                    "industry_description": null,
                    "industry_logo": "personal_products.png"
                },
                {
                    "industry_id": 51,
                    "industry_name": "Diversified FMCG",
                    "industry_description": null,
                    "industry_logo": "diversified_fmcg.png"
                },
                {
                    "industry_id": 55,
                    "industry_name": "Cigarettes & Tobacco Products",
                    "industry_description": null,
                    "industry_logo": "cigarettes_and_tobacco_products.png"
                }
            ]
        },
        {
            "sector": "Consumer Services",
            "sector_description": null,
            "sector_logo": "consumer_services.png",
            "industries": [
                {
                    "industry_id": 15,
                    "industry_name": "Retailing",
                    "industry_description": null,
                    "industry_logo": "retailing.png"
                },
                {
                    "industry_id": 27,
                    "industry_name": "Leisure Services",
                    "industry_description": null,
                    "industry_logo": "leisure_services.png"
                },
                {
                    "industry_id": 40,
                    "industry_name": "Other Consumer Services",
                    "industry_description": null,
                    "industry_logo": "other_consumer_services.png"
                }
            ]
        },
        {
            "sector": "Forest Materials",
            "sector_description": null,
            "sector_logo": "forest_materials.png",
            "industries": [
                {
                    "industry_id": 16,
                    "industry_name": "Paper Forest & Jute Products",
                    "industry_description": null,
                    "industry_logo": "paper_forest_and_jute_products.png"
                }
            ]
        },
        {
            "sector": "Construction Materials",
            "sector_description": null,
            "sector_logo": "construction_materials.png",
            "industries": [
                {
                    "industry_id": 17,
                    "industry_name": "Cement & Cement Products",
                    "industry_description": null,
                    "industry_logo": "cement_and_cement_products.png"
                },
                {
                    "industry_id": 53,
                    "industry_name": "Other Construction Materials",
                    "industry_description": null,
                    "industry_logo": "other_construction_materials.png"
                }
            ]
        },
        {
            "sector": "Power",
            "sector_description": null,
            "sector_logo": "power.png",
            "industries": [
                {
                    "industry_id": 20,
                    "industry_name": "Power",
                    "industry_description": null,
                    "industry_logo": "power.png"
                }
            ]
        },
        {
            "sector": "Consumer Durables",
            "sector_description": null,
            "sector_logo": "consumer_durables.png",
            "industries": [
                {
                    "industry_id": 24,
                    "industry_name": "Consumer Durables",
                    "industry_description": null,
                    "industry_logo": "consumer_durables.png"
                }
            ]
        },
        {
            "sector": "Realty",
            "sector_description": null,
            "sector_logo": "realty.png",
            "industries": [
                {
                    "industry_id": 30,
                    "industry_name": "Realty",
                    "industry_description": null,
                    "industry_logo": "realty.png"
                }
            ]
        },
        {
            "sector": "Telecommunication",
            "sector_description": null,
            "sector_logo": "telecommunication.png",
            "industries": [
                {
                    "industry_id": 34,
                    "industry_name": "Telecom - Equipment & Accessories",
                    "industry_description": null,
                    "industry_logo": "telecom_equipment_and_accessories.png"
                },
                {
                    "industry_id": 47,
                    "industry_name": "Telecom - Services",
                    "industry_description": null,
                    "industry_logo": "telecom_services.png"
                }
            ]
        },
        {
            "sector": "Automobile and Auto Components",
            "sector_description": null,
            "sector_logo": "automobile_and_auto_components.png",
            "industries": [
                {
                    "industry_id": 35,
                    "industry_name": "Auto Components",
                    "industry_description": null,
                    "industry_logo": "auto_components.png"
                },
                {
                    "industry_id": 44,
                    "industry_name": "Automobiles",
                    "industry_description": null,
                    "industry_logo": "automobiles.png"
                }
            ]
        },
        {
            "sector": "Utilities",
            "sector_description": null,
            "sector_logo": "utilities.png",
            "industries": [
                {
                    "industry_id": 42,
                    "industry_name": "Other Utilities",
                    "industry_description": null,
                    "industry_logo": "other_utilities.png"
                }
            ]
        },
        {
            "sector": "Media Entertainment & Publication",
            "sector_description": null,
            "sector_logo": "media_entertainment_and_publication.png",
            "industries": [
                {
                    "industry_id": 43,
                    "industry_name": "Entertainment",
                    "industry_description": null,
                    "industry_logo": "entertainment.png"
                },
                {
                    "industry_id": 50,
                    "industry_name": "Media",
                    "industry_description": null,
                    "industry_logo": "media.png"
                },
                {
                    "industry_id": 56,
                    "industry_name": "Printing & Publication",
                    "industry_description": null,
                    "industry_logo": "printing_and_publication.png"
                }
            ]
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header Row */}
            <div className=" flex justify-between ">
                <h3 className="text-2xl font-bold text-gray-800">Sector Performance</h3>
                {/* You can add a link or other elements here if needed */}
            </div>

            {/* Sector Cards */}
            <div className="flex flex-wrap gap-4 justify-center">
                {sectorData.map((sector, index) => (
                    <div key={index} className="bg-white shadow-md p-4 w-100">
                        <div className="flex items-center justify-between mb-2">
                            <img
                                className="w-16 h-16 mr-2 rounded-full ring-1 ring-gray-300"
                                src={SECTOR_ICON_URL + '/' + sector.sector_logo}
                                alt="Sector Icon"
                            />
                            <h3 className="text-lg font-semibold">{sector.sector}</h3>
                            <div className="">

                                <span class="flex align-middle justify-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 mb-1">Advance 4</span>
                                <span class="flex align-middle justify-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 mb-1">Decline 6</span>

                            </div>
                        </div>
                        <div>
                            {/* <div className="text-gray-600 text-sm mb-1">
                                Industries: {sector.industries.length} | Stocks: {10}
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-md font-semibold text-gray-700">Mkt Cap (Cr.)</h4>
                                    <p className="text-sm text-gray-500">{1000}</p>
                                </div>
                                <div className="text-right">

                                    <span class="flex align-middle justify-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-green-500 text-white mb-1">Advance 4</span>
                                    <span class="flex align-middle justify-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-red-500 text-white mb-1">Decline 6</span>

                                </div>
                            </div> */}
                            <div className="flex items-center my-2">
                                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                                <span className="mx-4 text-xs font-semibold text-gray-500 dark:text-gray-400">Industries {sector.industries.length} </span>
                                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-1">
                                {sector.industries.map((industry, index) => {
                                    return (<span class="flex align-middle justify-center text-xs font-medium px-2.5 py-0.5 bg-gray-500 rounded-2xl text-white">
                                        {industry.industry_name}
                                    </span>)
                                })}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Optional: Trending Now Section (you can customize this) */}
            <div className="text-2xl font-bold text-gray-800 mt-6">Trending Now</div>
            <div className="bg-white shadow-md p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Top Performing Sectors</h3>
                <p className="text-gray-600">
                    Here you could list the sectors with the highest positive change, for example.
                </p>
                {/* Add your trending content here */}
            </div>
        </div>
    );
}