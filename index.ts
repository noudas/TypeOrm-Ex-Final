import { Not, getRepository } from "typeorm"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Post } from "./entity/Post"
import * as readline from 'readline';

AppDataSource.initialize().then(async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(
        `Qual entidade quer tratar 
        1 - Author
        2 - Comments
        3 - Post
        4 - User`, 
        async (answer) => {
            switch(answer.toLowerCase()) {
                case '1':
                    console.log('Author');
                    break;
                case '2':
                    console.log('Comments');
                    break;
                case '3':
                    console.log('Post');
                    break;
                case '4':
                    const userRepository = getRepository(User);
                    const allUsers = await userRepository.find();
                    console.log(allUsers);
                    break;
                default:
                    console.log('Invalid answer!');
            }
            rl.close();
        });

    console.log("subiu");
}).catch(error => console.log(error));
