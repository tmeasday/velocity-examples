import { chai } from 'meteor/practicalmeteor:chai';

    describe("Server initialization", function(){
      it("should insert players into the database after server start", function(){
        chai.assert(Players.find().count() > 0);
      });
    });
