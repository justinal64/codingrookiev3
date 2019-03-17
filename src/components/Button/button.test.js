import React from "react";
import ConnectedButton, { Button } from "./button"; // {button} is the anmes export ConnectedButton is the default export
import renderer from "react-test-renderer";
import { mount } from "enzyme";

describe("Button", () => {
  describe("state", () => {
    it("renders button with passed props", () => {
      // Arrange
      const wrapper = mount(<Button onClick={() => {}} />);
      const instance = wrapper.instance();

      // Act/Assert
      expect(instance.state.counter).toEqual(0);
    });

    // Lets write a test that updates state
  });

  describe("onClick", () => {
    // TODO: Show why this is a bad idea!!!!
    // const wrapper = mount(<Button onClick={() => {}} />);
    // const instance = wrapper.instance();

    let wrapper;
    let instance;

    // TODO: What is beforeEach
    beforeEach(() => {
      wrapper = mount(<Button onClick={() => {}} counter={2} />);
      instance = wrapper.instance();
    });

    // Arrange
    it("onClick and than looking at state", () => {
      // TODO: Talk about .simulate
      // Act
      wrapper.find("button").simulate("click");
      // TODO: talk about .debug()
      // console.log(wrapper.debug());

      // Assert
      expect(instance.state.counter).toBe(1);
    });

    // Try to figure out how to spyOn this......
    it("onClick and spyOn", () => {
      // Arrange
      const button = wrapper.find("button");
      // Act
      // simulate clicking the button 4 times
      button.simulate("click");
      button.simulate("click");
      button.simulate("click");
      button.simulate("click");

      // Assert
      expect(instance.state.counter).toBe(4);
    });
  });

  describe("ReturnsTrue()", () => {
    let wrapper;
    let instance;

    // TODO: What is beforeEach
    beforeEach(() => {
      wrapper = mount(<Button onClick={() => {}} counter={2} />);
      instance = wrapper.instance();
    });

    // TODO: This is how you test functions inside a component
    it("ReturnsTrue() is called once", () => {
      // Act
      const result = instance.ReturnsTrue();

      // Assert
      expect(result).toBe(true);
    });

    // TODO: Talk about what a spy is and why you might use it
    it("ReturnsTrue() is called once", () => {
      // Arrange
      const spyOnReturnsTrue = jest.spyOn(instance, "ReturnsTrue");

      // Act
      instance.ReturnsTrue();

      // Assert
      expect(spyOnReturnsTrue).toBeCalledTimes(1);
    });
  });

  // using enzyme for rendering
  // checking that when the funtion is called state is correct
  describe("UpdateCounter()", () => {
    let wrapper;
    let instance;

    // TODO: What is beforeEach
    beforeEach(() => {
      wrapper = mount(<Button onClick={() => {}} counter={2} />);
      instance = wrapper.instance();
    });

    // show how I initially setup my test and what I do once I have completed a set of tests
    it("check state after calling UpdateCounter with no value", () => {
      // Arrange
      // when rendering with shallow onClick must be passed
      // in because it is marked as required
      // TODO: pssst... I know your probably nervous but don't forget to remove the next 2 lines
      const wrapper = mount(<Button onClick={() => {}} counter={2} />);
      const instance = wrapper.instance();
      const spyOnUpdateCounter = jest.spyOn(instance, "UpdateCounter");

      // Act
      // if not value state.counter = 0
      instance.UpdateCounter();

      // Assert
      // this is testing that the function was called
      expect(spyOnUpdateCounter).toBeCalledTimes(1);
      expect(instance.state.counter).toBe(0);
    });

    it("check state after calling UpdateCounter with a value", () => {
      // Act
      instance.UpdateCounter(21);

      // Assert
      expect(instance.state.counter).toBe(21);
    });

    it("calling UpdateCounter() multiple times", () => {
      // Arrange
      const spyOnUpdateCounter = jest.spyOn(instance, "UpdateCounter");

      // Act
      instance.UpdateCounter(21);
      instance.UpdateCounter(20);
      instance.UpdateCounter(2);

      // Assert
      // this is testing that the function was called
      expect(spyOnUpdateCounter).toBeCalledTimes(3);
    });

    it("mocking the data coming back from UpdateCounter", () => {
      // Arrange
      const counterMock = jest.spyOn(instance, "UpdateCounter");
      counterMock.mockImplementation(() => "I need more power!!!");

      // Act/Assert
      expect(instance.UpdateCounter(21)).toEqual("I need more power!!!");
    });

    it("mocking the data coming back from UpdateCounter", () => {
      // Arrange
      const counterMock = jest.spyOn(instance, "UpdateCounter");
      counterMock.mockImplementation(() => "I need more power!!!");

      // Act/Assert
      expect(instance.UpdateCounter(21)).toEqual("I need more power!!!");

      // remove the mock implementation from UpdateCounter()
      // ReArrange
      counterMock.mockRestore();
      // Act
      instance.UpdateCounter(21);
      // ReAssert
      expect(instance.state.counter).toEqual(21);
    });
  });

  describe("prop label", () => {
    // TODO: Talk about what a snapshot is.
    // What is renderer???
    // Why are we rendering the component a different way???
    it("renders button with passed props", () => {
      const component = renderer.create(
        <Button onClick={() => {}} label="test label" />
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    // Lets create a snapshot
  });
});
