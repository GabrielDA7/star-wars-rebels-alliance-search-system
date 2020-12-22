export const categories = [
  'people',
  'films',
  'starships',
  'vehicles',
  'species',
  'planets',
];

export const speciesNormalDataKeys = ['name', 'classification', 'designation', 'average_lifespan', 'eye_colors', 'hair_colors', 'skin_colors', 'language'];
export const speciesRelatedContentKeys = ['homeworld', 'people', 'films'];

export const peopleNormalDataKeys = ['name', 'birth_year', 'eye_color', 'gender', 'hair_color', 'height', 'mass', 'skin_color'];
export const peopleRelatedContentKeys = ['homeworld', 'vehicles', 'films'];

export const filmsNormalDataKeys = ['title', 'episode_id', 'opening_crawl', 'director', 'producer', 'release_date'];
export const filmsRelatedContentKeys = ['species', 'starships', 'vehicles', 'characters', 'planets'];

export const starshipsNormalDataKeys = ['name', 'model', 'starship_class', 'manufacturer', 'cost_in_credits', 'length', 'crew',
  'passengers', 'max_atmosphering_speed', 'hyperdrive_rating', 'MGLT', 'cargo_capacity', 'consumables'];
export const starshipsRelatedContentKeys = ['pilots', 'films'];

export const vehiclesNormalDataKeys = ['name', 'model', 'vehicle_class', 'manufacturer', 'cost_in_credits', 'length', 'crew',
  'passengers', 'max_atmosphering_speed', 'cargo_capacity', 'consumables'];
export const vehiclesRelatedContentKeys = ['pilots', 'films'];

export const planetsNormalDataKeys = ['name', 'diameter', 'rotation_period', 'orbital_period', 'gravity', 'population', 'climate',
  'terrain', 'surface_water'];
export const planetsRelatedContentKeys = ['residents', 'films'];
