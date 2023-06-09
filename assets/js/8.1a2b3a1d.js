(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{321:function(e,t,a){e.exports=a.p+"assets/img/OCLP-GUI-Settings-SIP-Enabled.10cec080.png"},322:function(e,t,a){e.exports=a.p+"assets/img/OCLP-GUI-Settings-SIP-Root-Patch.0fc642e8.png"},323:function(e,t,a){e.exports=a.p+"assets/img/OCLP-GUI-Settings-SIP-Disabled.76a74995.png"},324:function(e,t,a){e.exports=a.p+"assets/img/usb11-chart.13830974.png"},413:function(e,t,a){e.exports=a.p+"assets/img/OCLP-GUI-SMBIOS-Minimal.b10cfaf9.png"},414:function(e,t,a){e.exports=a.p+"assets/img/Hash-Mismatch.add9f660.png"},468:function(e,t,a){"use strict";a.r(t);var o=a(25),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("p",[e._v("Here are some common errors that users may experience while using this patcher:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#opencore-legacy-patcher-not-launching"}},[e._v("OpenCore Legacy Patcher not launching")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#stuck-on-this-version-of-mac-os-x-is-not-supported-on-this-platform"}},[e._v("Stuck on "),o("code",[e._v("This version of Mac OS X is not supported on this platform")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#cannot-boot-macos-without-the-usb"}},[e._v("Cannot boot macOS without the USB")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#infinite-recovery-os-reboot"}},[e._v("Infinite Recovery OS Booting")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#reboot-when-entering-hibernation-sleep-wake-failure"}},[e._v("Reboot when entering Hibernation ("),o("code",[e._v("Sleep Wake Failure")]),e._v(")")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#how-to-boot-big-sur-recovery"}},[e._v("How to Boot Big Sur Recovery")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#stuck-on-your-mac-needs-a-firmware-update"}},[e._v('Stuck on "Your Mac needs a firmware update"')])]),e._v(" "),o("li",[o("a",{attrs:{href:"#no-brightness-control"}},[e._v("No Brightness Control")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#cannot-connect-Wi-Fi-on-Monterey-with-legacy-cards"}},[e._v("Cannot connect Wi-Fi on Monterey with legacy cards")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#no-graphics-acceleration"}},[e._v("No Graphics Acceleration")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#black-screen-on-macbookpro113-in-macos-monterey"}},[e._v("Black Screen on MacBookPro11,3 in macOS Monterey")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#no-displayport-output-on-mac-pros-with-NVIDIA-kepler"}},[e._v("No DisplayPort Output on Mac Pros with NVIDIA Kepler")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#volume-hash-mismatch-error-in-macos-monterey"}},[e._v("Volume Hash Mismatch Error in macOS Monterey")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#cannot-disable-sip-in-recoveryos"}},[e._v("Cannot Disable SIP in recoveryOS")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#stuck-on-less-than-a-minute-remaining"}},[e._v('Stuck on "Less than a minute remaining..."')])]),e._v(" "),o("li",[o("a",{attrs:{href:"#no-acceleration-after-a-metal-gpu-swap-on-mac-pro"}},[e._v("No acceleration after a Metal GPU swap on Mac Pro")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#keyboard-mouse-and-trackpad-not-working-in-installer-or-after-update"}},[e._v("Keyboard, Mouse and Trackpad not working in installer or after update")])])]),e._v(" "),o("h2",{attrs:{id:"opencore-legacy-patcher-not-launching"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#opencore-legacy-patcher-not-launching"}},[e._v("#")]),e._v(" OpenCore Legacy Patcher not launching")]),e._v(" "),o("p",[e._v("If the application won't launch (e.g. icon will bounce in the Dock), try launching OCLP via Terminal by typing the following command, make sure you've moved the app to "),o("code",[e._v("/Applications")]),e._v(" before this.")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[e._v("/Applications/OpenCore-Patcher.app/Contents/MacOS/OpenCore-Patcher\n")])])]),o("h2",{attrs:{id:"stuck-on-this-version-of-mac-os-x-is-not-supported-on-this-platform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-this-version-of-mac-os-x-is-not-supported-on-this-platform"}},[e._v("#")]),e._v(" Stuck on "),o("code",[e._v("This version of Mac OS X is not supported on this platform")])]),e._v(" "),o("p",[e._v("This means macOS has detected an SMBIOS it does not support. To resolve this, ensure you're booting OpenCore "),o("strong",[e._v("before")]),e._v(" the macOS installer in the boot picker. Reminder that the option will be called "),o("code",[e._v("EFI Boot")]),e._v(".")]),e._v(" "),o("p",[e._v("Once you've booted OpenCore at least once, your hardware should now auto-boot it until either an NVRAM reset occurs, or you remove the drive with OpenCore installed.")]),e._v(" "),o("h2",{attrs:{id:"cannot-boot-macos-without-the-usb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cannot-boot-macos-without-the-usb"}},[e._v("#")]),e._v(" Cannot boot macOS without the USB")]),e._v(" "),o("p",[e._v("By default, the OpenCore Patcher won't install OpenCore onto the internal drive itself during installs. Instead, you'll need to either "),o("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/oc2hdd.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("manually transfer"),o("OutboundLink")],1),e._v(" OpenCore to the internal drive's EFI or run this patcher's Option 2 again and select your internal drive.")]),e._v(" "),o("p",[e._v("Reminder that once this is done, you'll need to select OpenCore in the boot picker again for your hardware to remember this entry and auto boot from then on.")]),e._v(" "),o("h2",{attrs:{id:"infinite-recovery-os-booting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#infinite-recovery-os-booting"}},[e._v("#")]),e._v(" Infinite Recovery OS Booting")]),e._v(" "),o("p",[e._v("With OpenCore Legacy Patcher, we rely on Apple Secure Boot to ensure OS updates work correctly and reliably with Big Sur. However this installs NVRAM variables that will confuse your Mac if not running with OpenCore. To resolve this, simply uninstall OpenCore and "),o("a",{attrs:{href:"https://support.apple.com/en-mide/HT201255",target:"_blank",rel:"noopener noreferrer"}},[e._v("reset NVRAM"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("Note: Machines with modified root volumes will also result in an infinite recovery loop until integrity is restored.")])]),e._v(" "),o("h2",{attrs:{id:"reboot-when-entering-hibernation-sleep-wake-failure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reboot-when-entering-hibernation-sleep-wake-failure"}},[e._v("#")]),e._v(" Reboot when entering Hibernation ("),o("code",[e._v("Sleep Wake Failure")]),e._v(")")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/dortania/Opencore-Legacy-Patcher/issues/72",target:"_blank",rel:"noopener noreferrer"}},[e._v("Known issue on some models"),o("OutboundLink")],1),e._v(", a temporary fix is to disable Hibernation by executing the following command in the terminal:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sudo pmset -a hibernatemode 0\n")])])]),o("h2",{attrs:{id:"how-to-boot-big-sur-recovery"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-boot-big-sur-recovery"}},[e._v("#")]),e._v(" How to Boot Big Sur Recovery")]),e._v(" "),o("p",[e._v("By default, the patcher will try to hide extra boot options such as recovery from the user. To make them appear, simply press the "),o("code",[e._v("Spacebar")]),e._v(" key while inside OpenCore's Picker to list all boot options.")]),e._v(" "),o("h2",{attrs:{id:"stuck-on-your-mac-needs-a-firmware-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-your-mac-needs-a-firmware-update"}},[e._v("#")]),e._v(' Stuck on "Your Mac needs a firmware update"')]),e._v(" "),o("p",[e._v('Full error: "Your Mac needs a firmware update in order to install to this Volume. Please select a Mac OS Extended (Journaled) volume instead."')]),e._v(" "),o("p",[e._v('This error occurs when macOS determines that the current firmware does not have full APFS support. To resolve this, when installing OpenCore, head to "Patcher Settings" and enable "Moderate SMBIOS Patching" or higher. This will ensure that the firmware reported will show support for full APFS capabilities.')]),e._v(" "),o("h2",{attrs:{id:"no-brightness-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-brightness-control"}},[e._v("#")]),e._v(" No Brightness Control")]),e._v(" "),o("p",[e._v("With OCLP v0.0.22, we've added support for brightness control on many models. However, some users may have noticed that their brightness keys do not work.")]),e._v(" "),o("p",[e._v("As a work-around, we recommend users try out the below app:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://actproductions.net/free-apps/brightness-slider/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brightness Slider"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"cannot-connect-wi-fi-on-monterey-with-legacy-cards"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cannot-connect-wi-fi-on-monterey-with-legacy-cards"}},[e._v("#")]),e._v(" Cannot connect Wi-Fi on Monterey with legacy cards")]),e._v(" "),o("p",[e._v("With OCLP v0.2.5, we've added support for legacy Wi-Fi on Monterey. However, some users may have noticed that they can't connect to wireless networks.")]),e._v(" "),o("p",[e._v('To work-around this, we recommend that users manually connect using the "Other" option in the Wi-Fi menu bar or manually adding the network in the "Network" preference pane.')]),e._v(" "),o("h2",{attrs:{id:"no-graphics-acceleration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-graphics-acceleration"}},[e._v("#")]),e._v(" No Graphics Acceleration")]),e._v(" "),o("p",[e._v("In macOS, GPU drivers are often dropped from the OS with each major release of it. With macOS Big Sur, currently, all non-Metal GPUs require additional patches to gain acceleration. In addition, macOS Monterey removed Graphics Drivers for both Intel Ivy Bridge and NVIDIA Kepler graphics processors.")]),e._v(" "),o("p",[e._v("If you're using OCLP v0.4.4, you should have been prompted to install Root Volume patches after the first boot from installation of macOS. If you need to do this manually, you can do so within the patcher app. Once rebooted, acceleration will be re-enabled as well as brightness control for laptops.")]),e._v(" "),o("h2",{attrs:{id:"black-screen-on-macbookpro11-3-in-macos-monterey"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#black-screen-on-macbookpro11-3-in-macos-monterey"}},[e._v("#")]),e._v(" Black Screen on MacBookPro11,3 in macOS Monterey")]),e._v(" "),o("p",[e._v("Due to Apple dropping NVIDIA Kepler support in macOS Monterey, "),o("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/522",target:"_blank",rel:"noopener noreferrer"}},[e._v("MacBookPro11,3's GMUX has difficulties switching back to the iGPU to display macOS correctly."),o("OutboundLink")],1),e._v(" To work-around this issue, boot the MacBookPro11,3 in Safe Mode and once macOS is installed, run OCLP's Post Install Root Patches to enable GPU Acceleration for the NVIDIA dGPU.")]),e._v(" "),o("ul",[o("li",[e._v("Safe Mode can be started by holding "),o("code",[e._v("Shift")]),e._v(" + "),o("code",[e._v("Enter")]),e._v(" when selecting macOS Monterey in OCLP's Boot Menu.")])]),e._v(" "),o("h2",{attrs:{id:"no-displayport-output-on-mac-pros-with-nvidia-kepler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-displayport-output-on-mac-pros-with-nvidia-kepler"}},[e._v("#")]),e._v(" No DisplayPort Output on Mac Pros with NVIDIA Kepler")]),e._v(" "),o("p",[e._v("If you're having trouble with DisplayPort output on Mac Pros, try enabling Minimal Spoofing in Settings -> SMBIOS Settings and rebuild/install OpenCore. This will trick macOS drivers into thinking you have a newer MacPro7,1 and resolve the issue.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(413),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"volume-hash-mismatch-error-in-macos-monterey"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#volume-hash-mismatch-error-in-macos-monterey"}},[e._v("#")]),e._v(" Volume Hash Mismatch Error in macOS Monterey")]),e._v(" "),o("p",[e._v('A semi-common popup some users face is the "Volume Hash Mismatch" error:')]),e._v(" "),o("p",{attrs:{align:"center"}},[o("img",{attrs:{src:a(414)}})]),e._v(" "),o("p",[e._v("What this error signifies is that the OS detects that the boot volume's hash does not match what the OS is expecting, this error is generally cosmetic and can be ignored. However if your system starts to crash spontaneously shortly after, you'll want to reinstall macOS fresh without importing any data at first.")]),e._v(" "),o("ul",[o("li",[e._v("Note that this bug affects native Macs as well and is not due to issues with unsupported Macs: "),o("a",{attrs:{href:"https://osxdaily.com/2021/11/10/volume-hash-mismatch-error-in-macos-monterey/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSX Daily: “Volume Hash Mismatch” Error in MacOS Monterey"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Additionally, it can help to disable FeatureUnlock in Settings -> Misc Settings as this tool can be strenuous on systems with weaker memory stability.")]),e._v(" "),o("h2",{attrs:{id:"cannot-disable-sip-in-recoveryos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cannot-disable-sip-in-recoveryos"}},[e._v("#")]),e._v(" Cannot Disable SIP in recoveryOS")]),e._v(" "),o("p",[e._v("With OCLP, the patcher will always overwrite the current SIP value on boot to ensure that users don't brick an installation after an NVRAM reset. However, for users wanting to disable SIP entirely, this can be done easily.")]),e._v(" "),o("p",[e._v("Head into the GUI, go to Patcher Settings, and toggle the bits you need disabled from SIP:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[e._v("SIP Enabled")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("SIP Lowered (Root Patching)")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("SIP Disabled")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("img",{attrs:{src:a(321),alt:""}})]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("img",{attrs:{src:a(322),alt:""}})]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("img",{attrs:{src:a(323),alt:""}})])])])]),e._v(" "),o("h2",{attrs:{id:"intermediate-issues-with-usb-1-1-and-bluetooth-on-macpro3-1-macpro5-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#intermediate-issues-with-usb-1-1-and-bluetooth-on-macpro3-1-macpro5-1"}},[e._v("#")]),e._v(" Intermediate issues with USB 1.1 and Bluetooth on MacPro3,1 - MacPro5,1")]),e._v(" "),o("p",[e._v("For those experiencing issues with USB 1.1 devices (such as mice, keyboards and bluetooth chipsets), macOS Big Sur and newer have weakened OS-side reliability for the UHCI controller in older Mac Pros.")]),e._v(" "),o("ul",[o("li",[e._v("UHCI is a USB 1.1 controller that is hooked together with the USB 2.0 ports in your system. Whenever a USB 1.1 device is detected, the UHCI controller is given ownership of the device at a hardware/firmware level.\n"),o("ul",[o("li",[e._v("EHCI is the USB 2.0 controller in older Mac Pros")])])])]),e._v(" "),o("p",[e._v("Because of this, we recommend placing a USB 2.0/3.0 hub between your devices and the port on the Mac Pro. UHCI and EHCI cannot both be used at once, so using a USB hub will always force the EHCI controller on.")]),e._v(" "),o("ul",[o("li",[e._v("Alternatively, you can try cold-starting the hardware and see if macOS recognizes the UHCI controller properly.")])]),e._v(" "),o("h2",{attrs:{id:"stuck-on-less-than-a-minute-remaining"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-less-than-a-minute-remaining"}},[e._v("#")]),e._v(' Stuck on "Less than a minute remaining..."')]),e._v(" "),o("p",[e._v('A common area for systems to get "stuck", namely for units that are missing the '),o("code",[e._v("AES")]),e._v(" CPU instruction/older mobile hardware. During this stage, a lot of heavy cryptography is performed, which can make systems appear to be stuck. In reality they are working quite hard to finish up the installation.")]),e._v(" "),o("p",[e._v("Because this step can take a few hours or more depending on drive speeds, be patient at this stage and do not manually power off or reboot your machine as this will break the installation and require you to reinstall. If you think your system has stalled, press the Caps Lock key. If the light turns on, your system is busy and not actually frozen.")]),e._v(" "),o("h2",{attrs:{id:"no-acceleration-after-a-metal-gpu-swap-on-mac-pro"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-acceleration-after-a-metal-gpu-swap-on-mac-pro"}},[e._v("#")]),e._v(" No acceleration after a Metal GPU swap on Mac Pro")]),e._v(" "),o("p",[e._v("If you finished installing Monterey with the original card installed (to see bootpicker for example) and swapped your GPU to a Metal supported one, you may notice that you're missing acceleration. To fix this, open OCLP and revert root patches to get your Metal-supported GPU work again.")]),e._v(" "),o("p",[e._v('Alternatively, you can remove "AutoPkg-Assets.pkg" from /Library/Packages on the USB drive before proceeding with the installation. To see the folder, enable hidden files with '),o("code",[e._v("Command")]),e._v(" + "),o("code",[e._v("Shift")]),e._v(" + "),o("code",[e._v(".")])]),e._v(" "),o("p",[e._v("The reason for this is that the autopatcher will assume that you will be using the original graphics card and therefore does non-metal patching, which includes removing some drivers for other cards. This causes Metal cards to not accelerate after swapping.")]),e._v(" "),o("h2",{attrs:{id:"keyboard-mouse-and-trackpad-not-working-in-installer-or-after-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-mouse-and-trackpad-not-working-in-installer-or-after-update"}},[e._v("#")]),e._v(" Keyboard, Mouse and Trackpad not working in installer or after update")]),e._v(" "),o("p",[e._v("For Macs using legacy USB 1.1 controllers, OpenCore Legacy Patcher can only restore support once it has performed root volume patches. Thus to install macOS, you need to hook up a USB hub between your Mac and Keyboard/Mouse.")]),e._v(" "),o("ul",[o("li",[e._v("For MacBook users, you'll need to find an external keyboard/mouse in addition to the USB hub")])]),e._v(" "),o("p",[e._v("More information can be found here:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/1021",target:"_blank",rel:"noopener noreferrer"}},[e._v("Legacy UHCI/OHCI support in Ventura #1021"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Applicable models include:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[e._v("Family")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Year")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Model")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Notes")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("MacBook")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Mid 2010 and older")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("MacBook4,1 - MacBook7,1")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("MacBook Air")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Late 2010 and older")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("MacBookAir2,1 - MacBookAir3,x")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("MacBook Pro")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Mid 2010 and older")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("MacBookPro4,1 - MacBookPro7,x")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v('Excludes Mid 2010 15" and 17" (MacBookPro6,x)')])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("iMac")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Late 2009 and older")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("iMac7,1 - iMac10,x")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v('Excludes Core i5/7 27" late 2009 iMac (iMac11,1)')])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("Mac mini")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Mid 2011 and older")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Macmini3,1 - Macmini5,x")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("Mac Pro")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Mid 2010 and older")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("MacPro3,1 - MacPro5,1")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}})])])]),e._v(" "),o("p",[o("img",{attrs:{src:a(324),alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);