let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('ProductListComponent', function() {
  it(`should exist @product-list-component-created`,function () {
    assert(fs.existsSync(__dirname + '/../../../app/product-list/product-list.component.ts'),
        "The ProductListComponent doesn't exist - have you run the `ng` command to generate it yet?");
  });
});
