---
id: core-comm
title: Communication with CORE
---

> Very WIP

Communication with CORE is established via Serial communication. Both devices can send a message to each other, transfering some kind of command with parameters.

## Message format

Each message contains a command and its parameters. Devices can send multiple commands within single communication, one command each line.

Each line starts with the command, continuing with the parameters, separated with slash `|` character. Some commands don't have any parameters.

Example:

```text
list_add_item|10|Settings and others
```

## List of available commands and parameters

### Global commands

Command name | Description | Parameters
-------------|-------------|-----------|
`hello` | A warm greeting (has no practical use) | |
`whatsup` | Handshaking request for CORE, sends version, waits for response | version (_string_), mode (_int_)
`notmuch` | Handshaking response ack for USER, sends version too | version (_string_)
`wait` | UI should wait until core is `ready` | timeout (optional, _int_)
`ready` | UI can continue after asking for `wait` | |
`shutdown` | Device is shutting down | |


### Other commands

Command name | Description | Parameters
-------------|-------------|-----------
`screen` | Update current displayed screen | screen name (_string_)
`status` | Update playback status | status (_string_)
`time` | Update current playback time (in seconds) | time (_float_)
`project` | Update information about currently opened project | name (_string_), bpm (_float_)


Command name | Description | Parameters
-------------|-------------|-----------
`btn_press` | Informs that button has been pressed | button ID (_int_)
`knob_val` | Knob value has changed | knob ID (_int_), value (_float_)


> TODO!

## Example

An example of communication after powering on the NOI:

<table>
    <tr>
        <th>CORE -> USER</th>
        <th>USER -> CORE</th>
    </tr>  
    <tr>
<td>  

    hello
    whatsup|v0.0.1|0

    wait
    screen|idle
    status|stopped
    time|0.0000
    project|newproj.noi|0|100
    ready
    




    _

</td>
<td>

    hello

    notmuch|v0.0.1






    btn_press|23
    knob_value|0|0.12124588
    knob_value|0|0.12158788
    knob_value|0|0.12387788
    knob_value|0|0.13883321
    _

</td>
    </tr>
</table>




## Speeds and theoretical limits

Devices are designed to use 9600bps baud rate. 1.17 kBps should be enough for exchanging important information fast enough.

Sending an information about pressed button should theoretically take around 12.5ms (assuming the message is 15B long). In one second we can fill the list with 60 items (assuming trasmitting one list item costs 20B). The display of the device won't be able to display more than 5 items on the screen at the time.

## Error handling

Errors are detected with parity bits automatically (8N1).