"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[75045],{45279:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=(a(26396),a(58215),["components"]),s={id:"mock",title:"Mock APIs"},c=void 0,l={unversionedId:"mock",id:"mock",isDocsHomePage:!1,title:"Mock APIs",description:"Playwright provides native support for most of the browser features. However, there are some experimental APIs and APIs which are not (yet) fully supported by all browsers. Playwright usually doesn't provide dedicated atomation APIs in such cases. You can use mocks to test behavior of your application in such cases. This guide gives a few examples.",source:"@site/docs/mock.mdx",sourceDirName:".",slug:"/mock",permalink:"/docs/next/mock",tags:[],version:"current",frontMatter:{id:"mock",title:"Mock APIs"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Creating mocks",id:"creating-mocks",children:[],level:2},{value:"Verifying API calls",id:"verifying-api-calls",children:[],level:2},{value:"Updating mock",id:"updating-mock",children:[],level:2}],g={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright provides native support for most of the browser features. However, there are some experimental APIs and APIs which are not (yet) fully supported by all browsers. Playwright usually doesn't provide dedicated atomation APIs in such cases. You can use mocks to test behavior of your application in such cases. This guide gives a few examples."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-mocks"},"Creating mocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#verifying-api-calls"},"Verifying API calls")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#updating-mock"},"Updating mock"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Let's consider a web app that uses ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery"},"battery API")," to show your device's battery status. We'll mock the battery API and check that the page correctly displays the battery status."),(0,i.kt)("h2",{id:"creating-mocks"},"Creating mocks"),(0,i.kt)("p",null,"Since the page may be calling the API very early while loading it's important to setup all the mocks before the "),(0,i.kt)("p",null,"page started loading. The easiest way to achieve that is to call ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-add-init-script"},"page.addInitScript(script[, arg])"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.addInitScript(() => {\n  const mockBattery = {\n    level: 0.75,\n    charging: true,\n    chargingTime: 1800,\n    dischargingTime: Infinity,\n    addEventListener: () => { }\n  };\n  // Override the method to always return mock battery info.\n  window.navigator.getBattery = async () => mockBattery;\n});\n")),(0,i.kt)("p",null,"Once this is done you can navigate the page and check its UI state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Configure mock API before each test.\ntest.beforeEach(async ({ page }) => {\n  await page.addInitScript(() => {\n    const mockBattery = {\n      level: 0.90,\n      charging: true,\n      chargingTime: 1800, // seconds\n      dischargingTime: Infinity,\n      addEventListener: () => { }\n    };\n    // Override the method to always return mock battery info.\n    window.navigator.getBattery = async () => mockBattery;\n  });\n});\n\ntest('show battery status', async ({ page }) => {\n  await page.goto('/');\n  await expect(page.locator('.battery-percentage')).toHaveText('90%');\n  await expect(page.locator('.battery-status')).toHaveText('Adapter');\n  await expect(page.locator('.battery-fully')).toHaveText('00:30');\n});\n\n")),(0,i.kt)("h2",{id:"verifying-api-calls"},"Verifying API calls"),(0,i.kt)("p",null,"Sometimes it is useful to check if the page made all expected APIs calls. You can record all API method invocations and then compare them with golden result. ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-expose-function"},"page.exposeFunction(name, callback)")," may come in handy for passing message from the page back to the test code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"test('log battery calls', async ({ page }) => {\n  const log = [];\n  // Expose function for pushing messages to the Node.js script.\n  await page.exposeFunction('logCall', msg => log.push(msg));\n  await page.addInitScript(() => {\n    const mockBattery = {\n      level: 0.75,\n      charging: true,\n      chargingTime: 1800,\n      dischargingTime: Infinity,\n      // Log addEventListener calls.\n      addEventListener: (name, cb) => logCall(`addEventListener:${name}`)\n    };\n    // Override the method to always return mock battery info.\n    window.navigator.getBattery = async () => {\n      logCall('getBattery');\n      return mockBattery;\n    };\n  });\n\n  await page.goto('/');\n  await expect(page.locator('.battery-percentage')).toHaveText('75%');\n\n  // Compare actual calls with golden.\n  expect(log).toEqual([\n    'getBattery',\n    'addEventListener:chargingchange',\n    'addEventListener:levelchange'\n  ]);\n});\n")),(0,i.kt)("h2",{id:"updating-mock"},"Updating mock"),(0,i.kt)("p",null,"To test that the app correctly reflects battery status updates it's important to make sure that the mock battery object fires same events that the browser implementation would. The following test demonstrates how to achieve that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"test('update battery status (no golden)', async ({ page }) => {\n  await page.addInitScript(() => {\n    // Mock class that will notify corresponding listners when battery status changes.\n    class BatteryMock {\n      level = 0.10;\n      charging = false;\n      chargingTime = 1800;\n      dischargingTime = Infinity;\n      _chargingListeners = [];\n      _levelListeners = [];\n      addEventListener(eventName, listener) {\n        if (eventName === 'chargingchange')\n          this._chargingListeners.push(listener);\n        if (eventName === 'levelchange')\n          this._levelListeners.push(listener);\n      }\n      // Will be called by the test.\n      _setLevel(value) {\n        this.level = value;\n        this._levelListeners.forEach(cb => cb());\n      }\n      _setCharging(value) {\n        this.charging = value;\n        this._chargingListeners.forEach(cb => cb());\n      }\n    };\n    const mockBattery = new BatteryMock();\n    // Override the method to always return mock battery info.\n    window.navigator.getBattery = async () => mockBattery;\n    // Save the mock object on window for easier access.\n    window.mockBattery = mockBattery;\n  });\n\n  await page.goto('/');\n  await expect(page.locator('.battery-percentage')).toHaveText('10%');\n\n  // Update level to 27.5%\n  await page.evaluate(() => window.mockBattery._setLevel(0.275));\n  await expect(page.locator('.battery-percentage')).toHaveText('27.5%');\n  await expect(page.locator('.battery-status')).toHaveText('Battery');\n\n  // Emulate connected adapter\n  await page.evaluate(() => window.mockBattery._setCharging(true));\n  await expect(page.locator('.battery-status')).toHaveText('Adapter');\n  await expect(page.locator('.battery-fully')).toHaveText('00:30');\n});\n")))}d.isMDXComponent=!0}}]);