import React from 'react'
import { TabBarIcon } from '~/components/atoms';
import { Icon } from 'react-native-elements';

function tabBarRenderIcon(focused, routeName) {
  switch (routeName) {
    case 'Dipositivos':
      return (
        <TabBarIcon
          focused={focused}
        >
          <Icon
            name='devices'
            type='material'
            size={30}
            color='#FFF'
          />
        </TabBarIcon>
      )
    case 'Inscritos':
      return (
        <TabBarIcon
          focused={focused}
        >
          <Icon
            name='important-devices'
            type='material'
            size={30}
            color='#FFF'
          />
        </TabBarIcon>
      )
    case 'Tópicos':
      return <TabBarIcon
        focused={focused}
      >
        <Icon
          name='format-list-bulleted'
          type='material'
          size={30}
          color='#FFF'
        />
      </TabBarIcon>
    case 'Configurações':
      return <TabBarIcon
        focused={focused}
      >
        <Icon
          name='settings'
          type='material'
          size={30}
          color='#FFF'
        />
      </TabBarIcon>
  }
}

export { tabBarRenderIcon }