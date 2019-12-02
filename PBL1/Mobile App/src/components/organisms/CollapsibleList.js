import React, { useState } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import { QuestionItem } from '../molecules';
import Theme from '../theme/Theme';

function CollapsibleList({ sections }) {
  const [activeSections, setActiveSections] = useState([])
  _renderHeader = (section, index, isActive, sections) => {
    return (
      <QuestionItem
        index={index}
        title={section.title}
        hasCollapsibled={isActive}
      />
    );
  }
  _renderContent = (section, i, isActive, sections) => {
    return (
      <Animatable.View
        animation='fadeInLeft'
        duration={500}
        style={styles.collapsibleContent}>
        <Animatable.Text
          duration={800}
          easing="ease-out"
          useNativeDriver
          animation={isActive ? 'zoomIn' : ''}
          style={styles.contentText}
        >
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }
  _updateSections = activeSections => {
    setActiveSections(activeSections)
  };
  return (
    <Accordion
      sections={sections}
      underlayColor='transparent'
      sectionContainerStyle={styles.sectionContainerStyle}
      activeSections={activeSections}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
    />
  );
}

const styles = {
  sectionContainerStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginVertical: 7,
  },
  collapsibleContent: {
    flex: 1,
    padding: 18,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  contentText: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '400',
    fontStyle: 'italic',
    color: Theme.primary
  }
}

export { CollapsibleList }