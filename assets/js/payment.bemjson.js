{
    block: 'payment',
    mix: [ { block: 'form', elemMods: {border: 'all'} } ],
    content: [
        { 
        	block: 'payment',
        	elem: 'header',
        	mix: [ 
        			{ block: 'form', elem: 'item', elemMods: { space-v: 'l' } },
        			{ block: 'form', elem: 'item', elemMods: { space-h: 'xl' } },
        			{ block: 'form', elem: 'item', elemMods: { border: 'bottom' } },
        		], 
        	content: { block: 'text', elemMods: { size: 'xxl' } } 
        },
        { 
        	block: 'payment',
        	elem: 'content',
        	mix: [ 
        			{ block: 'form', elem: 'item', elemMods: { space-v: 'xxxl' } },
        			{ block: 'form', elem: 'item', elemMods: { space-h: 'xl' } },
        			{ block: 'form', elem: 'item', elemMods: { border: 'bottom' } },
        		], 
        	content: [
        		{ 
    				block: 'form', 
    				elem: 'item', 
    				mix: [ 
	        			{ block: 'form', elem: 'item', elemMods: { indent-b: 'xl' } },
	        			{ block: 'form', elem: 'item', elemMods: { distribute: 'between' } },
	        			{ block: 'form', elem: 'item', elemMods: { vertical-align: 'center' } },
	        		],
	        		content: [
	        			{ 
		    				block: 'form', 
		    				elem: 'label', 
		    				mix: [ 
			        			{ block: 'form', elem: 'item', elemMods: { width: 'default' } },
			        			{ block: 'text', elemMods: { size: 'l' } },
			        			{ block: 'text', elemMods: { view: 'primary' } },
			        		],
		    			},
		    			{ 
		    				block: 'form', 
		    				elem: 'control', 
		    				tag: 'input'
		    			},
	        		]
    			},
    			{ 
    				block: 'form', 
    				elem: 'item', 
    				mix: [ 
	        			{ block: 'form', elem: 'item', elemMods: { indent-b: 'xl' } },
	        			{ block: 'form', elem: 'item', elemMods: { distribute: 'between' } },
	        			{ block: 'form', elem: 'item', elemMods: { vertical-align: 'center' } },
	        		],
	        		content: [
	        			{ 
		    				block: 'form', 
		    				elem: 'label', 
		    				mix: [ 
			        			{ block: 'form', elem: 'item', elemMods: { width: 'default' } },
			        			{ block: 'text', elemMods: { size: 'l' } },
			        			{ block: 'text', elemMods: { view: 'primary' } },
			        		],
		    			},
		    			{ 
		    				block: 'form', 
		    				elem: 'control', 
		    				tag: 'input'
		    			},
	        		]
    			},        		
        	] 
        },
        { 
        	block: 'payment',
        	elem: 'footer',
        	mix: [ 
        			{ block: 'form', elem: 'item', elemMods: { distribute: 'between' } },
        			{ block: 'form', elem: 'item', elemMods: { vertical-align: 'center' } },
        			{ block: 'form', elem: 'item', elemMods: { border: 'bottom' } },
        			{ block: 'form', elem: 'item', elemMods: { space-v: 'l' } },
        			{ block: 'form', elem: 'item', elemMods: { space-h: 'xl' } },
        		], 
        	content: [
    			{ 
    				block: 'text', 
    				mix: [ 
	        			{ block: 'text', elemMods: { size: 'l' } },
	        			{ block: 'text', elemMods: { view: 'primary' } },
	        		],
    			},
    			{ 
    				block: 'button'
    			},
    		]
        },
    ]
}
