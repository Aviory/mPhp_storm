<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/tPerson">
        <html>
        <body>
        <table border="1">
            <tr>
                <th>id</th>
                <th>fname</th>
                <th>lname</th>
                <th>age</th>
            </tr>
        <xsl:for-each select="tr">
            <tr>
            <xsl:for-each select="td">
                <td>
                    <xsl:template match="text">
                    <xsl:value-of select="id"/>
                    </xsl:template>
                </td>
            </xsl:for-each>
            </tr>
        </xsl:for-each>
        </table>
        </body>
        </html>
    </xsl:template>

</xsl:stylesheet>