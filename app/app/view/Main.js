Ext.define('HelloWorld.view.Main', {
    extend: 'Ext.tab.Panel',
    config: {
        tabBarPosition: 'bottom',
          items: [
              {
                  title: 'Carousel',
                  iconCls: 'action',
                  xtype: 'carousel',
                  items: [{          
                	  		style: 'background-color: #27ae60;',
                	  		html: 'green'
                    	},
                    	{
                    		style: 'background-color: #3498db;',
                    		html: 'blue'
                    	},
                    	{
                    		style: 'background-color: #2c3e50;',
                    		html: 'grey'
                    	}]
              },
              {  
                  xtype: 'nestedlist',
                  title: 'Nested List',
                  iconCls: 'compose',
                  displayField: 'text',
              
                  store: {
                      type: 'tree',
                      defaultRootProperty: 'items',
                      fields: [
							'text'
                      ],

                      root: {
                          items: [{
                        	  text: 'colors',
                        	  items: [{
                        		  text: 'red',
                        		  leaf: true
                        	  },
                        	  {
                        		  text: 'green',
                        		  leaf: true
                        	  },
                        	  {
                        		  text: 'yellow',
                        		  leaf: true
                        	  },
                        	  {
                        		  text: 'blue',
                        		  leaf: true
                        	  }]
                          },
                          {
                        	  text: 'fruits',
                        	  items: [{
                        		  text: 'banana',
                        		  leaf: true
                        	  },
                        	  {
                        		  text: 'apple',
                        		  leaf: true
                        	  },
                        	  {
                        		  text: 'orange',
                        		  leaf: true
                        	  }]
                          }]
                      },
                  }
              },
              {
                  title: 'Form',
                  iconCls: 'user',
                  xtype: 'formpanel',
                  layout: 'vbox',

                  items: [
                      {
                          xtype: 'fieldset',
                          title: 'Form',
                          height: 190,
                          items: [
                              {
                                  xtype: 'textfield',
                                  label: 'First Name:'
                              },
                              {
                                  xtype: 'textfield',
                                  label: 'Last Name:'
                              },
                              {
                                  xtype: 'emailfield',
                                  label: 'Email:'
                              }
                          ]
                      },
                      {
                          xtype: 'button',
                          text: 'Send',
                          ui: 'confirm'
                      }
                  ]
              },
          ]
      }
});