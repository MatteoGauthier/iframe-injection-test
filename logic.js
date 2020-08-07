var iframe = document.querySelector("#myIframe")
iframe = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument



iframe.document.open()
iframe.document.writeln("Hello World!")
iframe.document.close()
