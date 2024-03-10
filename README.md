# Dashboard

## Installation

excute this command in your terminal:

```shell
npm install
```

## Start

type in your terminal and excute:
```shell
npm run dev
```
## Browser

The full functionality of this dashboard is only accessable using Chrome. In other Browsers the connection to a heart rate monitor will not be possible.

## Webpage

Open the Webpage at http://localhost:3000

You will see the dashboard that can display the level of calm and the heartrate of the patient

## Connect the Neurosity Crown 

Add a `.env.local` to the root folder of your local project, that contains the password and username of your neurosity account.
Example:
```shell
NEXT_PUBLIC_EMAIL=your@email.com
NEXT_PUBLIC_PASSWORD=password
```

* Open the sidebar using the button in the top left corner.
* Press the Login buttton
* A successful login is display in the console
* You can close the sidebar again

Now press the 'Subscribe calm' button to get the calmness value from the neurosity crown

## Calm Value

The Calm Value displays the calmness of the user messured by the Crown between 0.0 and 1.0. A high value means calmness a low value means stress.

## Connect Heart Rate Monitor

Press the 'Connect Heartrate' Button. In Chrome the Bluetooth device connection window opens. Select your heartrate monitor and press connect. If the patient is wearing the monitor correctly a heart rate will be displayed in the circle below the button.

This feature was tested with a Polar H10 Bluetooth LE Heart rate monitor and should work with any Bluetooth LE heart rate monitor.

## Connection to Sound System

The Dashboard communicates with the Sound System over OSC. A simple OSC Client is defined in `src/pages/api/sendOscMessage.js`
You can change the location of the Sound Systems OSC-Server in this file.

## Stress Level and Communication with the Sound System

The Dashboard logs the calm value and calculates the avarage value over the last minute. When the average value over the last minute is below 0.3, meaning a longer period of a higher stress level of the patient, the dashboard sends a message to the Sound System, requesting the next song, to get the patient to calm down again. If the avarage calm value stays below 0.3 the next song request is send after another minute to avoid constant song changes. A status message showing that the next song is requested, is displayed below the calm and heart rate indicators.

## Manual Next Song Request

To request a new song manually, open the sidebar with the button in the top left corner. Press the "Request Next Song" Button. A status message showing that the next song is requested, is displayed below the calm and heart rate indicators. You can close the sidebar again.

## Logout

If you want to disconnect the Crown and logout from your connection with the Neurosity Server, open the sidebar with the button in the top left corner. Press the Logout Button. Your are now loged out. You can close the sidebar again.
