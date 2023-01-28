beforeEach(()=> {
   cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
   cy.get('[alt="Material Dark Theme"]').click()
   cy.get('[class="ng-tns-c141-9 ng-star-inserted"]').click()
   cy.get('[title="Form Layouts"]').click()
})

describe('input valid data', () => {
    const paramTest = ({testData, testData2, expectedResult, expectedResult2}) =>
          function () {
            cy.get('[placeholder="Jane Doe"]').type(`${testData}`);
            cy.get('[placeholder="Jane Doe"]').should("contain.value", `${expectedResult}`)
            cy.get('[class="form-inline ng-untouched ng-pristine ng-valid"]>[placeholder="Email"]').type(`${testData2}`);
            cy.get('[class="form-inline ng-untouched ng-pristine ng-valid"]>[placeholder="Email"]').should("contain.value", `${expectedResult2}`)
            cy.get('[class="form-inline ng-untouched ng-pristine ng-valid"]>[class="status-basic nb-transition"]>[class="label"]>[class="custom-checkbox"]').click()
          }
    
    it('input data name', paramTest({testData: 'Veronika Barnyachenko', testData2: 'vbarnyachenko@gmail.com', expectedResult: 'Veronika Barnyachenko', expectedResult2: 'vbarnyachenko@gmail.com'}))
})

describe('input invalid data', () => {
  const paramTest = ({testData, testData2, expectedResult, expectedResult2}) =>
        function () {
          cy.get('[placeholder="Jane Doe"]').type(`${testData}`);
          cy.get('[placeholder="Jane Doe"]').should("contain.value", `${expectedResult}`)
          cy.get('[class="form-inline ng-untouched ng-pristine ng-valid"]>[placeholder="Email"]').type(`${testData2}`);
          cy.get('[class="form-inline ng-untouched ng-pristine ng-valid"]>[placeholder="Email"]').should("contain.value", `${expectedResult2}`)
          cy.get('[class="form-inline ng-untouched ng-pristine ng-valid"]>[class="status-basic nb-transition"]>[class="label"]>[class="custom-checkbox"]').click()
        }
  
  it('input data name', paramTest({testData: '1234', testData2: '5678', expectedResult: '1234', expectedResult2: '5678'}))
})