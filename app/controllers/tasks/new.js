import Controller from '@ember/controller';

export default class TasksNewController extends Controller{
    actions: {
        addTask: function(){
            var title = this.get('title');
            var description = this.get('description');


        }

    }
}