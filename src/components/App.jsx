import { RecipeList } from './RecipeList/RecipeList';
import beginerRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import  {Component} from 'react'

export class App extends Component {
  state={
recipes:beginerRecipes,
selectedImage:null

  };
deleteRecipe=recipeId=>
{
this.setState(prevState=>{
  return{
recipes:prevState.recipes.filter(recipe=>recipe.id !==recipeId)
 }
 } )
};

selectImage=imageUrl=>{
this.setState({
selectedImage:imageUrl,})
}

render(){
  return (
    <Layout>
{this.state.selectedImage && (
      <div>
        <h2>Modal</h2>
        <img src={this.state.selectedImage} alt="Modal"  width="320"/>
      </div>)}
      <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} onSelect={this.selectImage}/>
      <GlobalStyle />
    </Layout>
  );
  }
};

