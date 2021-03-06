import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';


class UserLessons extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  getScoreStyle(score, style) {
    styleCopy = {}
    for (var key in style) {
      styleCopy[key] = style[key]
    }
    let scoreArray = score.split('/')
    let percent = Number(scoreArray[0]) / Number(scoreArray[1])
    let color = '#2CCC5A' //green
    if (percent < 0.65) {
      color = '#FA6467' //red
    } else if (percent < 0.85) {
      color = '#f2d204'
    }
    styleCopy.borderColor = color;
    return styleCopy
  }

  getScrollHeight(style) {
    styleCopy = {}
    for (var key in style) {
      styleCopy[key] = style[key]
    }
    let contentNum = this.props.user.lessons.length;
    let height = contentNum * 43 + 5
    styleCopy.height = height
    return styleCopy;
  }

  render() {
    const { textStyle, lessonStyle, scrollStyle, scoreCircle, lessonContainerStyle } = styles;
    return (
      <View>
        <Text style={textStyle}>Your Progress</Text>
        <View style={{height: 290, marginTop: 10}}>
          <ScrollView contentContainerStyle={this.getScrollHeight(scrollStyle)}>
            {this.props.user.lessons.map(lesson => (
              <View style={lessonContainerStyle}>
                <Text style={lessonStyle}>
                  {lesson.title}
                </Text>
                <Text style={this.getScoreStyle(lesson.score, scoreCircle)}>{lesson.score}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const grey = '#FAFAFA'

const styles = {
  scrollStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: grey,
    justifyContent: 'flex-start',
    width: Dimensions.get("window").width - 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gainsboro',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  lessonStyle: {
    fontSize: 22
  },
  lessonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 43
  },
  scoreCircle: {
    borderRadius: 100/2,
    width: 39,
    height: 39,
    marginRight: 5,
    textAlign: 'center',
    paddingTop: 7,
    fontSize: 16,
    fontWeight: 'bold',
    color: grey,
    borderWidth: 4,
    backgroundColor: 'grey'
  },
  textStyle: {
    color: '#1c1c1c',
    fontSize: 22,
    lineHeight: 35,
    alignSelf: 'center'
  }
}

export default UserLessons;