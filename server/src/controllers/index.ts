import { MovieController } from './movie';
import { PersonController } from './person'


const movieController = new MovieController()
const personController = new PersonController()

// Export the feature 
export { movieController, personController };