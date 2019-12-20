export interface FoodData {
  code: string;
  status_verbose: string;
  status: number;
  product: Product;
}

interface Product {
  ingredients_that_may_be_from_palm_oil_n: number;
  product_name: string;
  checkers_tags: any[];
  product_name_en_debug_tags: any[];
  purchase_places_debug_tags: any[];
  emb_codes_20141016: string;
  states: string;
  traces_tags: string[];
  quantity_debug_tags: any[];
  stores: string;
  max_imgid: string;
  additives_tags: string[];
  manufacturing_places: string;
  stores_debug_tags: any[];
  origins: string;
  image_thumb_url: string;
  traces_debug_tags: any[];
  last_modified_by: string;
  interface_version_created: string;
  nutrition_data_prepared_per_debug_tags: any[];
  ingredients_n: number;
  data_quality_warnings_tags: any[];
  ingredients_original_tags: string[];
  image_ingredients_url: string;
  nutrition_score_debug: string;
  nucleotides_prev_tags: any[];
  checkers: any[];
  ingredients_analysis_tags: string[];
  code: string;
  additives_debug_tags: any[];
  image_ingredients_thumb_url: string;
  image_small_url: string;
  nova_groups: string;
  brands_tags: string[];
  nova_group: number;
  lang_debug_tags: any[];
  sortkey: number;
  link_debug_tags: any[];
  expiration_date_debug_tags: any[];
  serving_size_debug_tags: any[];
  emb_codes_orig: string;
  serving_quantity: number;
  ingredients_that_may_be_from_palm_oil_tags: any[];
  languages_hierarchy: string[];
  ingredients_text_en_debug_tags: any[];
  quantity: string;
  image_nutrition_url: string;
  additives_prev_original_tags: string[];
  'fruits-vegetables-nuts_100g_estimate': number;
  countries: string;
  ingredients_text_with_allergens: string;
  countries_tags: string[];
  unique_scans_n: number;
  sources: Source[];
  unknown_ingredients_n: number;
  traces_hierarchy: string[];
  rev: number;
  expiration_date: string;
  categories_tags: string[];
  manufacturing_places_tags: any[];
  nutrition_grades_tags: string[];
  editors: string[];
  ingredients_text: string;
  pnns_groups_2: string;
  states_tags: string[];
  nutrition_data_per: string;
  packaging: string;
  additives_old_n: number;
  minerals_tags: any[];
  _keywords: string[];
  misc_tags: string[];
  ingredients: Ingredient[];
  ingredients_hierarchy: string[];
  nutriscore_grade: string;
  complete: number;
  codes_tags: string[];
  ingredients_tags: string[];
  labels_prev_hierarchy: string[];
  scans_n: number;
  correctors: string[];
  labels_hierarchy: string[];
  minerals_prev_tags: any[];
  amino_acids_tags: any[];
  vitamins_prev_tags: any[];
  traces_from_ingredients: string;
  image_front_thumb_url: string;
  nutrient_levels_tags: string[];
  brands_debug_tags: any[];
  countries_debug_tags: any[];
  lang: string;
  informers_tags: string[];
  other_nutritional_substances_tags: any[];
  ingredients_from_palm_oil_tags: any[];
  data_quality_tags: string[];
  purchase_places: string;
  ingredients_from_palm_oil_n: number;
  categories_lc: string;
  nutriments: Nutriments;
  manufacturing_places_debug_tags: any[];
  ingredients_n_tags: string[];
  packaging_tags: string[];
  informers: string[];
  categories_hierarchy: string[];
  generic_name_en: string;
  additives_n: number;
  data_quality_bugs_tags: any[];
  image_front_small_url: string;
  nutrition_data: string;
  completed_t: number;
  nova_group_debug: string;
  product_quantity: number;
  no_nutrition_data: string;
  selected_images: Selectedimages;
  nutriscore_score: number;
  labels_tags: string[];
  ingredients_ids_debug: string[];
  _id: string;
  generic_name_en_debug_tags: any[];
  origins_debug_tags: any[];
  categories: string;
  image_ingredients_small_url: string;
  image_nutrition_small_url: string;
  allergens_from_ingredients: string;
  unknown_nutrients_tags: any[];
  ingredients_text_debug: string;
  nucleotides_tags: any[];
  cities_tags: any[];
  interface_version_modified: string;
  image_url: string;
  nutrition_score_warning_no_fruits_vegetables_nuts: number;
  last_editor: string;
  emb_codes_tags: any[];
  serving_size: string;
  packaging_debug_tags: any[];
  entry_dates_tags: string[];
  pnns_groups_2_tags: string[];
  allergens_tags: string[];
  allergens: string;
  creator: string;
  nutrition_data_per_debug_tags: any[];
  origins_tags: string[];
  nutrition_score_beverage: number;
  emb_codes_debug_tags: any[];
  languages_codes: Languagescodes;
  last_image_dates_tags: string[];
  completeness: number;
  new_additives_n: number;
  labels_prev_tags: string[];
  created_t: number;
  photographers: string[];
  pnns_groups_1: string;
  photographers_tags: string[];
  last_modified_t: number;
  allergens_hierarchy: string[];
  languages_tags: string[];
  amino_acids_prev_tags: any[];
  generic_name: string;
  last_image_t: number;
  ingredients_text_en: string;
  ingredients_text_with_allergens_en: string;
  lc: string;
  nutrient_levels: Nutrientlevels;
  states_hierarchy: string[];
  brands: string;
  labels: string;
  last_edit_dates_tags: string[];
  stores_tags: any[];
  labels_lc: string;
  product_name_en: string;
  countries_hierarchy: string[];
  correctors_tags: string[];
  data_quality_info_tags: string[];
  emb_codes: string;
  images: Images;
  nova_groups_tags: string[];
  traces: string;
  popularity_tags: string[];
  additives_tags_n?: any;
  nutrition_grade_fr: string;
  update_key: string;
  link: string;
  debug_param_sorted_langs: string[];
  vitamins_tags: any[];
  editors_tags: string[];
  countries_lc: string;
  ingredients_debug: (null | string)[];
  nutrition_grades: string;
  image_nutrition_thumb_url: string;
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  image_front_url: string;
  languages: Languages;
  nutrition_data_prepared: string;
  nutriscore_data: Nutriscoredata;
  pnns_groups_1_tags: string[];
  purchase_places_tags: any[];
  additives_old_tags: string[];
  nutrition_data_prepared_per: string;
  id: string;
  data_quality_errors_tags: any[];
  additives_original_tags: string[];
}

interface Nutriscoredata {
  proteins: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  energy_points: number;
  negative_points: number;
  energy: number;
  saturated_fat_ratio_value: number;
  positive_points: number;
  saturated_fat_ratio: number;
  is_cheese: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  sodium: number;
  fiber: number;
  saturated_fat_ratio_points: number;
  sodium_value: number;
  saturated_fat: number;
  saturated_fat_points: number;
  fiber_points: number;
  grade: string;
  sugars_value: number;
  proteins_value: number;
  saturated_fat_value: number;
  energy_value: number;
  is_water: number;
  is_fat: number;
  sugars_points: number;
  proteins_points: number;
  score: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  sugars: number;
  is_beverage: number;
  sodium_points: number;
}

interface Languages {
  'en:english': number;
}

interface Images {
  '1': _1;
  '2': _1;
  '3': _1;
  '4': _1;
  '5': _1;
  nutrition_en: Nutritionen;
  ingredients: Nutritionen;
  nutrition: Nutritionen;
  front_en: Fronten;
  ingredients_en: Nutritionen;
  front: Fronten;
}

interface Fronten {
  rev: string;
  normalize?: any;
  white_magic?: any;
  imgid: string;
  sizes: Sizes2;
  geometry: string;
}

interface Nutritionen {
  rev: string;
  imgid: string;
  normalize: string;
  white_magic?: any;
  geometry: string;
  sizes: Sizes2;
}

interface Sizes2 {
  '100': _100;
  '200': _100;
  '400': _100;
  full: _100;
}

interface _1 {
  uploaded_t: number;
  sizes: Sizes;
  uploader: string;
}

interface Sizes {
  '100': _100;
  '400': _100;
  full: _100;
}

interface _100 {
  w: number;
  h: number;
}

interface Nutrientlevels {
  sugars: string;
  salt: string;
  'saturated-fat': string;
  fat: string;
}

interface Languagescodes {
  en: number;
}

interface Selectedimages {
  front: Front;
  nutrition: Front;
  ingredients: Front;
}

interface Front {
  thumb: Thumb;
  small: Thumb;
  display: Thumb;
}

interface Thumb {
  en: string;
}

interface Nutriments {
  fiber_value: number;
  fat_unit: string;
  sodium: number;
  'saturated-fat_serving': number;
  salt_serving: number;
  'nutrition-score-uk_100g': number;
  carbohydrates_unit: string;
  'nova-group_serving': number;
  energy: number;
  sugars_100g: number;
  proteins_serving: number;
  proteins: number;
  fiber_serving: number;
  fat_value: number;
  'nutrition-score-fr': number;
  salt: number;
  carbohydrates_100g: number;
  fat: number;
  'nutrition-score-fr_100g': number;
  salt_unit: string;
  'nutrition-score-uk': number;
  sodium_value: number;
  fiber_unit: string;
  'saturated-fat_100g': number;
  fiber: number;
  carbohydrates_value: number;
  'energy-kcal_value': number;
  energy_unit: string;
  sodium_100g: number;
  proteins_100g: number;
  fat_serving: number;
  proteins_unit: string;
  energy_value: number;
  proteins_value: number;
  energy_100g: number;
  sugars_value: number;
  energy_serving: number;
  fiber_100g: number;
  'energy-kcal_unit': string;
  'nova-group_100g': number;
  sugars_serving: number;
  'saturated-fat': number;
  carbohydrates_serving: number;
  'nova-group': number;
  sodium_serving: number;
  'saturated-fat_unit': string;
  'energy-kcal': number;
  'saturated-fat_value': number;
  salt_value: number;
  'energy-kcal_100g': number;
  sugars: number;
  'energy-kcal_serving': number;
  sodium_unit: string;
  fat_100g: number;
  carbohydrates: number;
  salt_100g: number;
  sugars_unit: string;
}

interface Ingredient {
  text: string;
  has_sub_ingredients?: string;
  id: string;
  rank?: number;
  vegetarian?: string;
  vegan?: string;
  origin?: string;
  from_palm_oil?: string;
}

interface Source {
  import_t: number;
  fields: string[];
  id: string;
  images: any[];
  url: string;
}