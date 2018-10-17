---
id: overview
title: NOI Synthesizer Project Documentation
sidebar_label: Overview
---

NOI is a open-source open-hardware personal portable synthesizer.

NOI Synthesizer is a rather simple device that allows you to create music or just simple tunes easily, wherever you are. It should be a tool for letting you get out some creativity, while also having some fun.

NOI is powered by a Raspberry Pi as the core of the synthesizer, Arduino for controlling some OLED displays, various buttons and rotary encoders and other nice stuff.

## Overview

The whole thing is split into two parts — *TOPNOI* and *BOTNOI*. Those parts are then connected and screwed together, the assembly should be very easy. Another small benefit is that two people can work on those parts simulteanously (since we're two people working on it).

### TOPNOI

*TOPNOI* is a user interfacing part. It consists of buttons, displays and rotary encoders and the whole thing is controlled by Arduino.

### BOTNOI

*BOTNOI* is the core of the device. Its main part is the Raspberry Pi, other parts are power source (battery), I/O ports and so on.

## Components choice

The whole hardware is built with accessibility in mind. All hardware parts should be easily bought cheaply from eBay or other shops and should be easily assembled even by someone not too experienced with electronics. That's the reason you'll find, for example, full Arduino board inside, instead of having the minimal Arduino setup (chip and needed components only) in there.