export interface IRecipe {
    id: string;
    title: string;
    ingredient: string[];
    description: string;
    favorite: boolean;
    createAt: Date;
}