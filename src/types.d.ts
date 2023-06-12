type Ingredient = {
  text: string;
  quantity: number;
  foodId: string;
  image: string | null;
  foodCategory: string;
  food: string;
  measure: string | null;
};

type RecipeImagePoperties = {
  url: string;
  width: number;
  height: number;
};

type Recipe = {
  uri: string;
  label: string;
  images: {
    THUMBNAIL: RecipeImagePoperties;
    SMALL: RecipeImagePoperties;
    REGULAR: RecipeImagePoperties;
    LARGE: RecipeImagePoperties;
  };
  ingredients: Ingredient[];
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
};
