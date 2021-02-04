import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
    createDb(){
        let userDetails=[{
            id: 1,
            name: 'Rahul',
            email: 'rk@gmail.com',
            address: 'Ranchi'
        }
        ]
        return {user: userDetails};
    }
    

}