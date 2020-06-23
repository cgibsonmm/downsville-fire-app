# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Event, type: :model do
  let(:member) { create(:member) }

  subject { Event.new(title: 'BBQ', start_time: '', end_time: '', date: DateTime.now, member: member) }

  before { subject.save }

  it 'should have a title' do
    subject.title = ''
    expect(subject).not_to be_valid
  end

  it 'title should be a min of three chars' do
    subject.title = 'aa'
    expect(subject).not_to be_valid
  end

  it 'title should be valid with a title of 3 or more chars' do
    subject.title = 'aaa'
    expect(subject).to be_valid
  end

  it 'should have a date' do
    subject.date = ''
    expect(subject).not_to be_valid
  end

  it 'should belong to a member' do
    subject.member = nil
    expect(subject).not_to be_valid
  end
end
