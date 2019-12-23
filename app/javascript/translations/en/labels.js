export default {
  true: 'Yes',
  false: 'No',
  selected: 'Selected',
  or: 'or',
  deselect: 'Click to deselect',
  shop: {
    rentPrice: 'rental',
    sellPrice: 'price',
    buyPrice: 'buying price',
  },
  stats: {
    quickStats: {
      newShips: 'New Ships in %{year}',
      totalShips: 'Total Ships',
    },
    modelsByClassification: 'Models by Classification',
    modelsBySize: 'Models by Size',
    modelsPerMonth: 'Models per Month',
    modelsByManufacturer: 'Models by Manufacturer',
    modelsByProductionStatus: 'Models by Production Status',
  },
  roadmap: {
    selectWeek: 'Select Week',
    changes: 'Changes',
    shipRoadmap: 'Ship-Roadmap',
    releases: 'Releases',
    unscheduled: 'Unscheduled',
    lastUpdate: 'Last Update',
    recentlyUpdated: 'Recently Updated',
    lastVersion: {
      completed: {
        decreased: 'Decreased Completed Tasks by %{value}',
        increased: 'Increased Completed Tasks by %{value}',
      },
      tasks: {
        decreased: 'Decreased Tasks by %{value}',
        increased: 'Increased Tasks by %{value}',
      },
      active: {
        decreased: 'Item was removed from the Roadmap',
        increased: 'Item was readded to the Roadmap',
      },
      released: 'Item was released to PU',
      release: 'Item moved from release %{old} to %{new}',
      addedToRelease: 'Item new in release %{release}',
    },
    stories: {
      one: '%{count} Story',
      other: '%{count} Stories',
    },
    tasks: {
      one: 'of %{count} Task',
      other: 'of %{count} Tasks',
    },
    ships: {
      one: '%{count} Ship',
      other: '%{count} Ships',
    },
  },
  charts: {
    view: {
      one: '%{label}:<br><b>%{count}</b> View',
      other: '%{label}:<br><b>%{count}</b> Views',
    },
    ship: {
      one: '%{label}:<br><b>%{count}</b> Ship',
      other: '%{label}:<br><b>%{count}</b> Ships',
    },
    'ship-pie': {
      one: '%{label}:<br><b>%{count}</b> Ship (%{percentage} %)',
      other: '%{label}:<br><b>%{count}</b> Ships (%{percentage} %)',
    },
    'component-pie': {
      one: '%{label}:<br><b>%{count}</b> Component (%{percentage} %)',
      other: '%{label}:<br><b>%{count}</b> Components (%{percentage} %)',
    },
    user: {
      one: '%{label}:<br><b>%{count}</b> User',
      other: '%{label}:<br><b>%{count}</b> Users',
    },
    visit: {
      one: '%{label}:<br><b>%{count}</b> Visit',
      other: '%{label}:<br><b>%{count}</b> Visits',
    },
  },
  rsiRoadmap: 'RSI Roadmap',
  unknown: 'Unknown',
  none: '-',
  search: 'Search',
  unknownModel: '%{slug} Unknown',
  'not-available': 'N/A',
  receiveSaleNotifications: '',
  publicUrl: 'Public URL',
  '3dView': '3D',
  poweredByStarship42: 'Powered by starship42.com',
  filter: 'Filter',
  taxExcluded: 'excl. VAT',
  hangar: 'Hangar',
  hangarStats: 'Stats',
  hangarMetrics: {
    totalMoney: 'Money Value',
    totalMinCrew: 'Min. Crew',
    totalMaxCrew: 'Max. Crew',
    totalCargo: 'Total Cargo',
  },
  selectModel: 'Select a Ship',
  compare: {
    removeModel: 'Remove Ship',
    addModel: 'Add a Ship',
    enough: "Don't you think 8 Ships are enough? ;)",
  },
  cargoRoutes: 'Cargo routes',
  uecPerUnit: 'aUEC / Unit',
  au: 'AU',
  uec: 'aUEC',
  sell: 'Sell',
  buy: 'Buy',
  yourFlagship: 'Your Flagship',
  flagship: 'Flagship',
  fleet: {
    size: 'Fleet size',
    sid: 'Spectrum ID (SID)',
    rpg: 'Role Play',
    memberCount: '%{count} Members',
    recruiting: 'Recruiting',
    exclusive: 'Exclusive Membership',
    members: 'Members',
  },
  hangarGroup: {
    name: 'Name',
    color: 'Color',
    sort: 'Sort Order',
  },
  source: 'Source',
  model: {
    variants: 'Variants',
    modules: 'Modules',
    upgrades: 'Upgrade-Kits',
    brochure: 'Brochure',
    onSale: 'On Sale',
    addons: 'Modules & Upgrade-Kits',
    purchased: 'Purchased',
    productionStatus: {
      'in-production': 'In Production',
      'in-concept': 'In Concept',
      ready: 'Hangar Ready',
      'flight-ready': 'Flight Ready',
      announced: 'Announced',
    },
  },
  metrics: {
    info: 'Info',
    levels: 'Levels',
    base: 'Base',
    crew: 'Crew',
    speed: 'Speed',
    missileOptions: 'Missle Options (if available)',
  },
  component: {
    size: 'Size: %{size}',
  },
  hardpoint: {
    legend: {
      headline: 'Legend',
      slotTaken: 'Slot taken',
      slotAvailable: 'Slot available',
    },
    mounts: 'Total Mounts',
    quantity: 'Per Mount',
    size: 'Size',
    rackSize: 'Rack Size',
    category: 'Category',
    categoryOrRackSize: 'Category / Rack Size',
    categories: {
      rsiavionic: 'Avionics',
      rsimodular: 'Systems',
      rsipropulsion: 'Propulsion',
      rsithruster: 'Thruster',
      rsiweapon: 'Weapons',
    },
    types: {
      radar: 'Radar',
      computers: 'Computers',
      power_plants: 'Power Plants',
      coolers: 'Coolers',
      shield_generators: 'Shield Generators',
      fuel_intakes: 'Fuel Intakes',
      fuel_tanks: 'Fuel Tanks',
      quantum_drives: 'Quantum Drives',
      jump_modules: 'Jump Modules',
      quantum_fuel_tanks: 'Quantum Fuel Tanks',
      main_thrusters: 'Main Thrusters',
      maneuvering_thrusters: 'Maneuvering Thrusters',
      weapons: 'Weapons',
      turrets: 'Turrets',
      missiles: 'Missiles',
      utility_items: 'Utility Items',
    },
  },
  blank: {
    propulsion: 'No Propulsion present',
    ordnance: 'No Ordnance present',
    modular: 'No Modular present',
    avionics: 'No Avionics present',
    userShips: 'Your Hangar is currently Empty. To Add Ships / Vehicles to Your Hangar click the following Icon on Any Ship in the Database:',
  },
  user: {
    saleNotify: 'I want to receive Sale Notifications',
    publicHangar: 'Public Hangar enabled',
  },
  vehicle: {
    name: 'Name',
    flagship: 'Flagship',
    purchased: 'Purchased',
    public: 'Visible on Public Hangar',
    nameVisible: 'Name visible on Public Hangar',
    saleNotify: 'I want to receive Sale Notifications',
    selectGroup: 'Select a Group',
  },
  image: {
    background: 'Use as Background?',
    enabled: 'Enabled?',
    delete: 'Delete',
    start: 'Start',
    cancel: 'Cancel',
    processing: 'Processing...',
    error: 'Error',
    name: 'Name',
    size: 'File size',
    dropzone: 'Drop images here',
    cancelUpload: 'Cancel upload',
    startUpload: 'Start upload',
    selectImages: 'Add images...',
    selectFolder: 'Add a folder...',
  },
  signUp: "Don't have an Account?",
  login: 'Username or E-Mail',
  username: 'Username',
  email: 'E-Mail',
  avatar: 'Avatar',
  alreadyRegistered: 'Already have an Account?',
  currentPassword: 'Current Password',
  password: 'Password',
  passwordConfirmation: 'Password Confirmation',
  rememberMe: 'Remember me',
  emptyList: 'No %{name} present',
  all: 'All',
  supportUs: 'Support FleetYards.net via',
  account: {
    destroyInfo: "If you want to delete Your Account and remove all your Information from Fleetyards.net and its Services click the Button below. Be aware of that this is a permanent Action and can't be reverted.",
  },
  filters: {
    shops: {
      name: 'Name',
      type: 'Type',
      celestialObject: 'Celestial object',
      model: 'Ship',
      equipment: 'Equipment',
      component: 'Component',
      commodity: 'Commodity',
      commodityType: 'Commodity Type',
      starsystem: 'Starsystem',
      station: 'Station',
    },
    shopItems: {
      category: 'Category',
      subCategory: 'Sub Category',
      name: 'Name',
      manufacturer: 'Manufacturer',
      minPrice: 'min. Price',
      maxPrice: 'max. Price',
    },
    stations: {
      name: 'Name',
      celestialObject: 'Celestial Object',
      starsystem: 'Starsystem',
      type: 'Station Type',
      shops: 'Shops',
      docks: 'Docks',
      habs: 'Habitation?',
    },
    vehicles: {
      name: 'Name or Ship name',
      lengthLt: 'Length <=',
      lengthGt: 'Length >=',
      pledgePriceLt: 'Pledge Price <=',
      pledgePriceGt: 'Pledge Price >=',
      priceLt: 'Price <=',
      priceGt: 'Price >=',
      purchased: 'Purchased',
      public: 'Public',
      group: 'Group',
    },
    tradeRoutes: {
      sortBy: 'Sort by',
      sortByValues: {
        percent: 'Max. Percent',
        profit: 'Max. Profit',
      },
      cargoShip: 'With Cargoship?',
      origin: 'From?',
      destination: 'To?',
      excludeCommodityType: 'Exclude Commodity Type',
    },
    models: {
      shipRole: 'Ship Role',
      classification: 'Classification',
      focus: 'Focus',
      manufacturer: 'Manufacturer',
      onSale: 'On Sale',
      size: 'Size',
      price: 'Price',
      pledgePrice: 'Pledge Price',
      productionStatus: 'Production Status',
      lengthLt: 'Length <=',
      lengthGt: 'Length >=',
      pledgePriceLt: 'Pledge Price <=',
      pledgePriceGt: 'Pledge Price >=',
      priceLt: 'Price <=',
      priceGt: 'Price >=',
      willItFit: 'Will it Fit?',
    },
    images: {
      station: 'Station',
      model: 'Ship',
    },
  },
  station: {
    docks: 'Docks',
    location: 'Location',
    type: 'Type',
    habitation: 'Habitation',
    habs: 'Habs',
    shops: 'Shops',
    locationPrefix: {
      default: 'on',
      asteriod: 'on asteroid near',
      orbit: 'in orbit around',
    },
    locationSuffix: 'near %{location}',
  },
  tradeRoutes: {
    buy: 'Buy for: %{uec}',
    sell: 'Sell for: %{uec}',
    cargoShip: 'for %{cargo} SCU',
    sortByPercent: 'Sort by Profit Percent',
    sortByProfit: 'Sort by Profit Value',
  },
  erkul: {
    prefix: 'Tryout Loadouts with',
    link: 'Erkul\'s DPS Calculator',
  },
}
