import Pairburn from '../../src/components/pairburn';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('Pairburn', () => {
  it('should render', () => {
    const wrapper = shallow(<Pairburn/>);
    expect(wrapper.find('.pairburn').length).to.equal(1);
  });

  it('should render a meme type select', () => {
    const wrapper = shallow(<Pairburn/>);
    expect(wrapper.find('select').length).to.equal(1);
  });

  it('should render a top text input', () => {
    const wrapper = shallow(<Pairburn/>);
    expect(wrapper.find('.top-text').length).to.equal(1);
  });

  it('should render a bottom text input', () => {
    const wrapper = shallow(<Pairburn/>);
    expect(wrapper.find('.bottom-text').length).to.equal(1);
  });

  it('should have the correct attributes on .top-text', () => {
    const wrapper = shallow(<Pairburn/>);
    const text = wrapper.find('.top-text');
    expect(text.prop('placeholder')).to.equal('Top Text');
    expect(text.prop('maxLength')).to.equal('45');
  });

  it('should have the correct attribute on .bottom-text', () => {
    const wrapper = shallow(<Pairburn/>);
    const text = wrapper.find('.bottom-text');
    expect(text.prop('placeholder')).to.equal('Bottom Text');
    expect(text.prop('maxLength')).to.equal('45');
  });

  it('should render a button with the text "Generate Meme"', () => {
    const wrapper = shallow(<Pairburn/>);
    const btn = wrapper.find('button');
    expect(btn.length).to.equal(1);
    expect(btn.text()).to.equal('Generate Meme');
  });

  it('should render an image tag', () => {
    const wrapper = shallow(<Pairburn/>);
    expect(wrapper.find('img').length).to.equal(1);
  });
});
