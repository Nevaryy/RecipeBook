export interface IRecipe {
    id: string;
    title: string;
    ingredient: string[];
    description: string;
    favourite: boolean;
    createAt: Date;
}